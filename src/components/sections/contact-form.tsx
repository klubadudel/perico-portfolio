"use client";

import { useActionState, useEffect, startTransition } from "react"; // Changed from useFormState (react-dom) to useActionState (react) and import startTransition
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

declare global {
  interface Window {
    grecaptcha: any; // Declare grecaptcha globally
  }
}

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  status: "idle",
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export function ContactFormSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed from useFormState
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      form.reset(); // Reset form fields on success
    } else if (state.status === "error" && state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  // Function to handle form submission including reCAPTCHA v3 execution
  const handleClientSubmit = form.handleSubmit(async (values) => {
    if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
       console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set.");
       toast({
          title: "Configuration Error",
          description: "reCAPTCHA site key is missing.",
          variant: "destructive",
       });
       return; // Prevent submission
    }

    // Execute reCAPTCHA and get the token
    window.grecaptcha.ready(function() {
      startTransition(() => { // Wrap the reCAPTCHA execution and submission in a transition
        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {action: 'submit'}).then(function(token: string) {
          // Find the hidden input and set its value
          const recaptchaInput = document.getElementById('g-recaptcha-response') as HTMLInputElement | null;
          if (recaptchaInput) {
            recaptchaInput.value = token;
          } else {
             console.error("Hidden reCAPTCHA input not found.");
             toast({
                title: "Configuration Error",
                description: "reCAPTCHA input field is missing.",
                variant: "destructive",
             });
             return; // Prevent submission
          }

          // Trigger the native form submission. 
          // useActionState on the form's action prop will intercept this.
          const formElement = document.getElementById('contact-form') as HTMLFormElement | null;
          if (formElement) {
             formElement.submit(); // Trigger native form submission
          } else {
             console.error("Contact form element not found for native submit.");
             toast({
                title: "Configuration Error",
                description: "Form element not found.",
                variant: "destructive",
             });
          }
        }).catch((error: any) => { // Catch potential errors during reCAPTCHA execution
            console.error("reCAPTCHA execution failed:", error);
             toast({
                title: "Error",
                description: "Failed to execute reCAPTCHA. Please try again.",
                variant: "destructive",
             });
        });
      });
    });
  });

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Get In Touch
        </h2>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Me</CardTitle>
            <CardDescription>
              Have a project in mind or just want to say hi? Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              {/* Use the client-side handler for submission */}
              {/* The form's action prop is now handled by useActionState */} 
              <form onSubmit={handleClientSubmit} className="space-y-6" id="contact-form" action={formAction}> 
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage>{state.errors?.name?.[0]}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                       <FormMessage>{state.errors?.email?.[0]}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or inquiry..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>{state.errors?.message?.[0]}</FormMessage>
                    </FormItem>
                  )}
                />
                {/* Remove reCAPTCHA v2 Widget */}
                {/* <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}></div> */}

                {/* Hidden input for reCAPTCHA v3 token */}
                <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />

                <SubmitButton />
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Invalid form data. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would send this data to your backend/email service
  console.log("Contact form submitted:", { name, email, message });

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a random error for demonstration purposes
  // if (Math.random() > 0.7) {
  //   return {
  //     status: "error",
  //     message: "An unexpected error occurred. Please try again later.",
  //   };
  // }

  return {
    status: "success",
    message: "Thank you for your message! We'll get back to you soon.",
  };
}

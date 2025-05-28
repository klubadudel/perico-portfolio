"use server";

import { z } from "zod";
import { Resend } from 'resend';

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

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Replace with your actual email address where you want to receive messages
const MY_CONTACT_EMAIL = process.env.MY_CONTACT_EMAIL;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_THRESHOLD = 0.5; // Adjust the score threshold as needed (0.0 to 1.0)

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Get reCAPTCHA response token from the form data
  const recaptchaResponse = formData.get('g-recaptcha-response') as string;

  if (!RECAPTCHA_SECRET_KEY) {
    console.error("RECAPTCHA_SECRET_KEY environment variable is not set.");
    return {
      status: "error",
      message: "Server configuration error (reCAPTCHA). Cannot send message.",
      errors: {},
    };
  }

  if (!recaptchaResponse) {
     return {
       status: "error",
       message: "Please complete the reCAPTCHA.",
       errors: {},
     };
  }

  // Verify reCAPTCHA response with Google
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;

  try {
    const recaptchaVerifyResponse = await fetch(verificationUrl, {
      method: 'POST',
    });

    const recaptchaJson = await recaptchaVerifyResponse.json();

    // Verify success and score (v3 specific)
    if (!recaptchaJson.success || recaptchaJson.score < RECAPTCHA_THRESHOLD) {
      console.error("reCAPTCHA v3 verification failed or score too low:", recaptchaJson);
      return {
        status: "error",
        // Provide a generic error message to the user
        message: "Automated submission detected. Please try again.",
        errors: {},
      };
    }

    // Proceed with form validation if reCAPTCHA successful
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

    if (!MY_CONTACT_EMAIL) {
      console.error("MY_CONTACT_EMAIL environment variable is not set.");
      return {
        status: "error",
        message: "Server configuration error. Cannot send message.",
        errors: {},
      };
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Your Website Contact Form <onboarding@resend.dev>', // Use a verified email/domain in production
      to: [MY_CONTACT_EMAIL], // Send to your configured email address
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email, // Set the submitter's email as reply-to
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message.replace(/\n/g, '<br>')}</p>`, // Replace newlines with <br>
    });

    if (error) {
       console.error("Resend send error:", error);
       return {
         status: "error",
         message: error.message || "Failed to send message. Please try again later.",
         errors: {},
       };
    }

    console.log("Email sent successfully via Resend:", data);

    return {
      status: "success",
      message: "Thank you for your message! I will get back to you soon.",
      errors: {},
    };

  } catch (error) {
    console.error("Unexpected server action error:", error);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again.",
      errors: {},
    };
  }
}

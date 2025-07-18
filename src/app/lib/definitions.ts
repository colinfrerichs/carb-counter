import { z } from "zod";

export const RegisterFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long." })
        .trim(),
    email: z.email({ message: "Please enter a valid email." }).trim(),
    password: z
        .string()
        .min(8, { message: "Must be at least 8 characters long." })
        .regex(/[a-zA-Z]/, { message: "Must contain at least 1 letter. "})
        .regex(/[0-9]/, { message: "Must contain at least one number." })
        .regex(/[^a-zA-Z0-9]/, { message: "Must contain at least one special character." })
        .trim()
});

export type FormState = 
    | {
        errors?: {
            name?: string[],
            email?: string[],
            password?: string[],
        }
        message?: string
    }
    | undefined

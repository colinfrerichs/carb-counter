"use server";

import { RegisterFormSchema, FormState } from "@/app/lib/definitions"

export async function register(state: FormState, formData: FormData) {
    const validatedFields = RegisterFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password")
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // else -> create user!
    return {}
}

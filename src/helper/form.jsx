import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, UseFormProps, useForm } from "react-hook-form";
import { ZodType, z } from "zod";

const AuthFormSchema = z.object({
  email: z
    .string()
    .nonempty()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Can't be empty" })
    .min(6, { message: "Must more than 6 characters" })
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(1, "Can't be empty")
    .min(8, "Must be more than 8 characters")
    .max(32, "Must be less than 32 characters")
    .trim(),
  countersign: z.string().min(1, "Can't be empty").trim(),
});

export const RegisterFormSchema = AuthFormSchema.pick({
  email: true,
  password: true,
  countersign: true,
}).refine((data) => data.password === data.countersign, {
  path: ["countersign"],
  message: "Oops! The passwords don't match",
});

export const LoginFormSchema = AuthFormSchema.pick({
  email: true,
  password: true,
});

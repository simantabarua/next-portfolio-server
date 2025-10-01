import { z } from "zod";
import { userRoleSchema } from "../common/enums.validation";

export const createUserSchema = z.object({
  email: z.email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  role: userRoleSchema.optional().default("ADMIN"),
});

export const updateUserSchema = z.object({
  email: z.email({ message: "Invalid email format" }).optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .optional(),
  role: userRoleSchema.optional(),
});

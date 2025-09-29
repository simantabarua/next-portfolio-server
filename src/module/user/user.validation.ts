import { z } from "zod";
import { userRoleSchema } from "../common/enums.validation";

export const createUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: userRoleSchema.optional().default("ADMIN"),
});

export const updateUserSchema = createUserSchema.partial();

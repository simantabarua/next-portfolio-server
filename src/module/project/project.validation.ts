import { z } from "zod";
import { projectStatusSchema } from "../common/enums.validation";

export const createProjectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/)
    .optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  imageUrl: z.string().url().optional(),
  projectUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  status: projectStatusSchema.default("PUBLISHED"),
  authorId: z.string().uuid("Invalid author ID"),
  categories: z.array(z.string().uuid()).optional(),
});

export const updateProjectSchema = createProjectSchema.partial();

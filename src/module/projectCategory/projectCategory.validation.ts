import { z } from "zod";

export const createProjectCategorySchema = z.object({
  name: z.string().min(3, "Category name must be at least 3 characters"),
  description: z.string().max(200).optional(),
});

export const updateProjectCategorySchema = createProjectCategorySchema.partial();

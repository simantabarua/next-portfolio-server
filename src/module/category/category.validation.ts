import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(3, "Category name must be at least 3 characters"),
  description: z.string().max(200).optional(),
});

export const updateCategorySchema = createCategorySchema.partial();

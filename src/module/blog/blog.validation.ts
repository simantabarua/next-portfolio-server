import { z } from "zod";
import { blogStatusSchema } from "../common/enums.validation";

export const createBlogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  tags: z.array(z.string()).default([]),
  coverImage: z.string().url().optional(),
  featured: z.boolean().default(false),
  viewCount: z.number().default(0),
  status: blogStatusSchema.default("DRAFT"),
  publishedAt: z.date().optional(),
  authorId: z.string().uuid("Invalid author ID"),
  categories: z.array(z.string().uuid()).optional(),
});

export const updateBlogSchema = createBlogSchema.partial();

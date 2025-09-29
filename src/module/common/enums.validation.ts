import { z } from "zod";
import { UserRole, BlogStatus, ProjectStatus } from "@prisma/client";

export const userRoleSchema = z.enum(
  Object.values(UserRole) as [string, ...string[]]
);

export const blogStatusSchema = z.enum(
  Object.values(BlogStatus) as [string, ...string[]]
);
export const projectStatusSchema = z.enum(
  Object.values(ProjectStatus) as [string, ...string[]]
);

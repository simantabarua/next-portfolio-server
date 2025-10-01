import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createProjectCategory = async (
  data: Prisma.ProjectCategoryCreateInput
) => {
  const projectCategory = await prisma.projectCategory.create({ data });
  return projectCategory;
};
const getProjectCategories = async () => {
  const projectCategories = await prisma.projectCategory.findMany();
  return projectCategories;
};
const getProjectCategory = async (id: string) => {
  const projectCategory = await prisma.projectCategory.findUnique({
    where: { id },
  });
  return projectCategory;
};
const updateProjectCategory = async (
  id: string,
  data: Prisma.ProjectCategoryUpdateInput
) => {
  const projectCategory = await prisma.projectCategory.update({
    where: { id },
    data,
  });
  return projectCategory;
};
const deleteProjectCategory = async (id: string) => {
  const projectCategory = await prisma.projectCategory.delete({
    where: { id },
  });
  return projectCategory;
};
export const ProjectCategoryService = {
  createProjectCategory,
  getProjectCategories,
  getProjectCategory,
  updateProjectCategory,
  deleteProjectCategory,
};

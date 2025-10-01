import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createCategory = async (name: string) => {
  const category = await prisma.category.create({ data: { name } });
  return category;
};
const getCategory = async (id: string) => {
  const category = await prisma.category.findUnique({ where: { id } });
  return category;
};

const getCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

const updateCategory = async (id: string, data: Prisma.CategoryUpdateInput) => {
  const category = await prisma.category.update({ where: { id }, data });
  return category;
};

const deleteCategory = async (id: string) => {
  const category = await prisma.category.delete({ where: { id } });
  return category;
};

export const CategoryService = {
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};

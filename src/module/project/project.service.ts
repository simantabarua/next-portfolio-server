import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (data: Prisma.ProjectCreateInput) => {
  const project = await prisma.project.create({ data });
  return project;
};
const getProjects = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};

const getProject = async (id: string) => {
  const project = await prisma.project.findUnique({ where: { id } });
  return project;
};

const updateProject = async (id: string, data: Prisma.ProjectUpdateInput) => {
  const project = await prisma.project.update({ where: { id }, data });
  return project;
};

const deleteProject = async (id: string) => {
  const project = await prisma.project.delete({ where: { id } });
  return project;
};

export const ProjectService = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
};
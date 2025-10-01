import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (data: Prisma.UserCreateInput) => {
  const user = await prisma.user.create({ data });
  return user;
};
const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
};
const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
const updateUser = async (id: string, data: Prisma.UserUpdateInput) => {
  const user = await prisma.user.update({ where: { id }, data });
  return user;
};
const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({ where: { id } });
  return user;
};
export const UserService = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};

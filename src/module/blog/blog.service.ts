import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const createBlog = async (data: Prisma.BlogCreateInput) => {
  const blog = await prisma.blog.create({ data });
  return blog;
};

const getBlogs = async () => {
  const blogs = await prisma.blog.findMany();
  return blogs;
};
const getBlog = async (slug: string) => {
  const blog = await prisma.blog.findUnique({
    where: {
      slug: slug,
    },
  });
  return blog;
};

const updateBlog = async (id: string, data: Prisma.BlogUpdateInput) => {
  const blog = await prisma.blog.update({ where: { id }, data });
  return blog;
};

const deleteBlog = async (id: string) => {
  const blog = await prisma.blog.delete({ where: { id } });
  return blog;
};

export const BlogService = {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};

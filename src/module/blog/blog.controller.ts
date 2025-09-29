import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const blog = await BlogService.createBlog(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Blog created successfully",
    data: blog,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const blog = await BlogService.updateBlog(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog updated successfully",
    data: blog,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const blog = await BlogService.deleteBlog(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog deleted successfully",
    data: blog,
  });
});

const getBlog = catchAsync(async (req, res) => {
  const blog = await BlogService.getBlog(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog fetched successfully",
    data: blog,
  });
});

const getBlogs = catchAsync(async (req, res) => {
  const blogs = await BlogService.getBlogs();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs fetched successfully",
    data: blogs,
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogs,
};

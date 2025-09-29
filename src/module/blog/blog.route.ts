import { Router } from "express";
import { BlogController } from "./blog.controller";
import { updateBlogSchema } from "./blog.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post("/", validateRequest(updateBlogSchema), BlogController.createBlog);
router.get("/", BlogController.getBlogs);
router.get("/:id", BlogController.getBlog);
router.put(
  "/:id",
  validateRequest(updateBlogSchema),
  BlogController.updateBlog
);
router.delete("/:id", BlogController.deleteBlog);

export const BlogRoutes = router;

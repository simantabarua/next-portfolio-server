import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();

router.post("/", BlogController.createBlog);
router.get("/", BlogController.getBlogs);
router.get("/:id", BlogController.getBlog);
router.put("/:id", BlogController.updateBlog);
router.delete("/:id", BlogController.deleteBlog);

export const BlogRoutes = router;

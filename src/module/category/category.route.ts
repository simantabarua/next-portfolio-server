import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";
import { createCategorySchema } from "./category.validation";
import { CategoryController } from "./category.controller";

const router = Router();

router.post(
  "/",
  validateRequest(createCategorySchema),
  CategoryController.createCategory
);
router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategory);
router.put(
  "/:id",
  validateRequest(createCategorySchema),
  CategoryController.updateCategory
);
router.delete("/:id", CategoryController.deleteCategory);

export const CategoryRoutes = router;

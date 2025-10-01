import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";
import { createProjectCategorySchema } from "./projectCategory.validation";
import { ProjectCategoryController } from "./projectCategory.controller";
const router = Router();
router.post(
  "/",
  validateRequest(createProjectCategorySchema),
  ProjectCategoryController.createProjectCategory
);
router.get("/", ProjectCategoryController.getProjectCategories);
router.get("/:id", ProjectCategoryController.getProjectCategory);
router.put(
  "/:id",
  validateRequest(createProjectCategorySchema),
  ProjectCategoryController.updateProjectCategory
);
router.delete("/:id", ProjectCategoryController.deleteProjectCategory);

export const ProjectCategoryRoutes = router;

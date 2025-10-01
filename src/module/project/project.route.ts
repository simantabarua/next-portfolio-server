import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProjectController } from "./project.controller";
import { createProjectSchema } from "./project.validation";

const router = Router();

router.post(
  "/",
  validateRequest(createProjectSchema),
  ProjectController.createProject
);
router.get("/", ProjectController.getProjects);
router.get("/:id", ProjectController.getProject);
router.put(
  "/:id",
  validateRequest(createProjectSchema),
  ProjectController.updateProject
);
router.delete("/:id", ProjectController.deleteProject);

export const ProjectRoutes = router;

import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";
import { createUserSchema } from "./user.validation";
import { UserController } from "./user.controller";

const router = Router();

router.post("/", validateRequest(createUserSchema), UserController.createUser);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.put(
  "/:id",
  validateRequest(createUserSchema),
  UserController.updateUser
);
router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;

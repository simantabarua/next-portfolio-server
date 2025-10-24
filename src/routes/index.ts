import { Router } from "express";
import { BlogRoutes } from "../module/blog/blog.route";
import { UserRoutes } from "../module/user/user.route";
import { CategoryRoutes } from "../module/category/category.route";
import { ProjectRoutes } from "../module/project/project.route";
import { ProjectCategoryRoutes } from "../module/projectCategory/projectCategory.route";
import { AuthRoutes } from "../module/auth/auth.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/projectCategory",
    route: ProjectCategoryRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

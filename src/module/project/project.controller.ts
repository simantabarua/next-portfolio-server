import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ProjectService } from "./project.service";
import { sendResponse } from "../../utils/sendResponse";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.createProject(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Project created successfully",
    data: project,
  });
});

const getProjects = catchAsync(async (req: Request, res: Response) => {
  const projects = await ProjectService.getProjects();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects fetched successfully",
    data: projects,
  });
});

const getProject = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.getProject(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project fetched successfully",
    data: project,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.updateProject(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project updated successfully",
    data: project,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.deleteProject(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project deleted successfully",
    data: project,
  });
});

export const ProjectController = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
};

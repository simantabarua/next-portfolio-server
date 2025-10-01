import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectCategoryService } from "./projectCategory.service";

const createProjectCategory = catchAsync(
  async (req: Request, res: Response) => {
    const projectCategory = await ProjectCategoryService.createProjectCategory(
      req.body
    );
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Project Category created successfully",
      data: projectCategory,
    });
  }
);
const getProjectCategories = catchAsync(async (req: Request, res: Response) => {
  const projectCategories = await ProjectCategoryService.getProjectCategories();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project Categories fetched successfully",
    data: projectCategories,
  });
});

const getProjectCategory = catchAsync(async (req: Request, res: Response) => {
  const projectCategory = await ProjectCategoryService.getProjectCategory(
    req.params.id
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project Category fetched successfully",
    data: projectCategory,
  });
});

const updateProjectCategory = catchAsync(
  async (req: Request, res: Response) => {
    const projectCategory = await ProjectCategoryService.updateProjectCategory(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Project Category updated successfully",
      data: projectCategory,
    });
  }
);

const deleteProjectCategory = catchAsync(
  async (req: Request, res: Response) => {
    const projectCategory = await ProjectCategoryService.deleteProjectCategory(
      req.params.id
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Project Category deleted successfully",
      data: projectCategory,
    });
  }
);

export const ProjectCategoryController = {
  createProjectCategory,
  getProjectCategories,
  getProjectCategory,
  updateProjectCategory,
  deleteProjectCategory,
};

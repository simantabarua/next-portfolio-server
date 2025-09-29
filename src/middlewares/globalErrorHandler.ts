import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  status?: number;
}

export const globalErrorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  console.error(err);

  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
};

import { NextFunction, Request, Response } from "express";

type CatchAsync = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const catchAsync =
  (fn: CatchAsync) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch((err) => next(err));

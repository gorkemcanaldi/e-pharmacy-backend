import createHttpError from "http-errors";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof createHttpError.HttpError) {
    return res.status(err.status).send({
      message: err.message,
      status: err.status,
    });
  }

  res.status(500).send({
    message: err instanceof Error ? err.message : "server error",
    status: 500,
  });
};

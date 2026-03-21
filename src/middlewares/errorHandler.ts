import createHttpError from "http-errors";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

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
  if (err instanceof ZodError) {
    return res
      .status(400)
      .send({ message: err.issues.map((e) => e.message), status: 400 });
  }

  res.status(500).send({
    message: err instanceof Error ? err.message : "server error",
    status: 500,
  });
};

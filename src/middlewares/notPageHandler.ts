import { Request, Response } from "express";

export const notPageHandler = (req: Request, res: Response) => {
  res.status(404).send({
    status: 404,
    message: "Page not found",
  });
};

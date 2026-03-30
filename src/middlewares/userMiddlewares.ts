import sessionsCollection from "../db/models/Sessions";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const userMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };
    const session = await sessionsCollection.findOne({
      userId: decoded.id,
      accessToken: token,
    });

    if (!session) {
      return res.status(401).send({ message: "session not found" });
    }
    if (session.accessTokenValidUntil < new Date()) {
      return res.status(401).send({ message: "access token expired" });
    }
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(403).send({ message: "Invalid or expired token" });
  }
};

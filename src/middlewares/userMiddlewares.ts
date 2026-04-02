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
    return res.status(401).json({ message: "No token provided" });
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
      return res.status(401).json({ message: "Session not found" });
    }
    if (session.accessTokenValidUntil < new Date()) {
      return res.status(401).json({ message: "Access token expired" });
    }

    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

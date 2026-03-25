import cors from "cors";
import express from "express";
import UserRouter from "./routes/user";
import { errorHandler } from "middlewares/errorHandler";
import { notPageHandler } from "middlewares/notPageHandler";
import cookieParser from "cookie-parser";
import ProductRouter from "routes/product";

export const createServer = () => {
  const PORT = process.env.PORT || 5000;
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use("/user", UserRouter);
  app.use("/products", ProductRouter);
  app.use(notPageHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log("server started");
  });
};

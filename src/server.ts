import cors from "cors";
import express from "express";
import UserRouter from "./routes/user";
import { errorHandler } from "middlewares/errorHandler";
import { notPageHandler } from "middlewares/notPageHandler";

export const createServer = () => {
  const PORT = process.env.PORT;
  const app = express();
  app.use(cors());

  app.use("/user", UserRouter);

  app.use(notPageHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log("server started");
  });
};

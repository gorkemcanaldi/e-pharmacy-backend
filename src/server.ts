import cors from "cors";
import express from "express";
import UserRouter from "./routes/user";
import { errorHandler } from "./middlewares/errorHandler";
import { notPageHandler } from "./middlewares/notPageHandler";
import cookieParser from "cookie-parser";
import ProductRouter from "./routes/product";
import SuppliersRouter from "./routes/supplier";
import OrderRouter from "./routes/order";
import CustomerRouter from "./routes/customer";
import DashboardRouter from "./routes/dashboard";

export const createServer = () => {
  const PORT = process.env.PORT || 5000;
  const app = express();
  app.use(
    cors({
      origin: "https://e-pharmacy-frontend-nine.vercel.app",
      credentials: true,
    }),
  );
  app.use(express.json());
  app.use(cookieParser());
  app.use("/user", UserRouter);
  app.use("/products", ProductRouter);
  app.use("/suppliers", SuppliersRouter);
  app.use("/orders", OrderRouter);
  app.use("/customers", CustomerRouter);
  app.use("/dashboard", DashboardRouter);
  app.use(notPageHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log("server started");
  });
};

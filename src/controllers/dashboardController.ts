import { Request, Response } from "express";
import { dashboardServices } from "../services/dashboard";

const getDashboardController = async (req: Request, res: Response) => {
  const data = await dashboardServices();

  res.json(data);
};

export { getDashboardController };

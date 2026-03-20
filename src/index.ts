import dotenv from "dotenv";
import initMongoDB from "./db/initMongoDB";
import { createServer } from "./server";
dotenv.config();

const index = async () => {
  await initMongoDB();
  createServer();
};

index();

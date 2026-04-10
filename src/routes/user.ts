import { Router } from "express";
import {
  loginController,
  logoutController,
  refreshController,
  registerController,
  userInfoController,
} from "../controllers/userController";
import { userMiddlewares } from "../middlewares/userMiddlewares";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const UserRouter = Router();
/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: user registration successful
 *         content:
 *           application/json:
 *             example:
 *               message: user registration successful
 *               status: 201
 *               data:
 *                 name: deneme
 *                 email: deneme@deneme.com
 *                 _id: 123456
 */
UserRouter.post("/register", ctrlWrapper(registerController));
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: login successful
 *         content:
 *           application/json:
 *             example:
 *               message: login successful
 *               status: 200
 *               accessToken: eyJhbGciOi...
 */
UserRouter.post("/login", ctrlWrapper(loginController));
/**
 * @swagger
 * /user/refresh:
 *   post:
 *     summary: Refresh access token
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: token refreshed successfully
 *         content:
 *           application/json:
 *             example:
 *               message: token refreshed
 *               status: 200
 *               accessToken: eyJhbGciOiJIUzI1NiIs...
 *       401:
 *         description: No refresh token
 *       403:
 *         description: Invalid or expired refresh token
 */
UserRouter.post("/refresh", ctrlWrapper(refreshController));
/**
 * @swagger
 * /user/logout:
 *   post:
 *     summary: Logout user
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: logout successful
 */
UserRouter.post("/logout", ctrlWrapper(logoutController));
/**
 * @swagger
 * /user/user-info:
 *   get:
 *     summary: Get logged in user info
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: user info returned
 *         content:
 *           application/json:
 *             example:
 *               name: deneme
 *               email: deneme@deneme.com
 *       401:
 *         description: Unauthorized
 */
UserRouter.get("/user-info", userMiddlewares, ctrlWrapper(userInfoController));

export default UserRouter;

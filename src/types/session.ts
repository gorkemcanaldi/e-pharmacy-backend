import { Types } from "mongoose";

export interface ISession {
  userId: Types.ObjectId;
  accessToken: string;
  refreshToken: string;
  accessTokenValidUntil: Date;
  refreshTokenValidUntil: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

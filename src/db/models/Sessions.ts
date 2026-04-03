import { model, Schema, Types } from "mongoose";
import { ISession } from "../../types/session";

const sessionsSchema = new Schema<ISession>(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    accessTokenValidUntil: {
      type: Date,
      required: true,
    },
    refreshTokenValidUntil: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
sessionsSchema.index({ userId: 1 });

const sessionsCollection = model<ISession>("Session", sessionsSchema);

export default sessionsCollection;

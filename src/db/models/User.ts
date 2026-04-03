import { model, Schema } from "mongoose";
import { IUser } from "../../types/user";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
userSchema.index({ email: 1 }, { unique: true });
const usersCollection = model<IUser>("User", userSchema);

export default usersCollection;

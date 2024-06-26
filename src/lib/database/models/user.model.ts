import { Schema, model, Model, models } from "mongoose";
import bcryptjs from "bcryptjs";

export interface IUser extends Document {
  email: string;
  name: string;
  imageUrl: string;
  password: string;
  role: "user" | "admin";
  posts?: PostType[];
  about?: string;
  coverPicture: string;
}

interface Methods {
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema = new Schema<IUser, {}, Methods>({
  name: { type: String, required: [true, "Name is required."] },
  email: { type: String, required: [true, "Email is required."], unique: true },
  password: { type: String, required: [true, "Password is required."] },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  imageUrl: { type: String, required: false },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  about: { type: String, default: "" },
  coverPicture: { type: String },
});

UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified(this.password) || this.isNew) {
      const salt = await bcryptjs.genSalt(10);
      this.password = await bcryptjs.hash(this.password, salt);
    }

    next();
  } catch (error) {
    throw error;
  }
});

UserSchema.methods.comparePassword = async function (password) {
  try {
    return await bcryptjs.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = models?.User || model("User", UserSchema);
export default User as Model<IUser, {}, Methods>;

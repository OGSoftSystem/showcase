import { Schema, model, Model, models } from "mongoose";
import bcrypt from "bcrypt";
import { IPost } from "./post.model";


export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role?: "user" | "admin";
  imageUrl?: string;
  posts: IPost[];
  about: string;
}

interface Methods {
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema = new Schema<IUser, {}, Methods>({
  username: { type: String, required: [true, "Username is required"] },
  email: { type: String, required: [true, "Email is required"] },
  password: { type: String, required: [true, "Password is required"] },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  imageUrl: { type: String, required: false },
  posts: [{type: Schema.Types.ObjectId, ref:'Post'}],
  about: { type: String, default: "" },
});

UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified(this.password) || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      //  Set the entered password as the hashed password before saving to db
      this.password = hashedPassword;
    }

    next();
  } catch (error) {
    throw error;
  }
});

UserSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = models?.User || model("User", UserSchema);
export default User as Model<IUser, {}, Methods>;

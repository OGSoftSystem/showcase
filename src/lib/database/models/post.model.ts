import { Schema, model, Model, models, Document } from "mongoose";

export interface IPost extends Document {
  postId: string;
  title: string;
  subtitle: string;
  body: string;
  author: string;
  imageUrl: string;
  date: Date;
  category: string;
}

const PostSchema = new Schema<IPost>({
  postId: { type: String },
  title: { type: String, required: [true, "Title is required"] },
  subtitle: { type: String, required: [true, "Subtitle is required"] },
  body: { type: String, required: [true, "Body is required"] },
  imageUrl: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String },
});

const Post = models?.Post || model("Post", PostSchema);
export default Post as Model<IPost>;

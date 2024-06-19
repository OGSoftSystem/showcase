import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: { type: String, required: [true, "Title is required"] },
  subtitle: { type: String, required: [true, "Subtitle is required"] },
  body: { type: String, required: [true, "Body is required"] },
  imageUrl: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  category: { type: String },
  published: { type: Boolean, default: false },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likes: { type: Number, default: 0 },
  likesByUser: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const Post = models?.Post || model("Post", PostSchema);
export default Post;

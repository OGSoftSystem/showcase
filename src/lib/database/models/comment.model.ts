import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
  comment: { type: String, required: [true, "comment is required"] },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  // quotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],

  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const Comment = models?.Comment || model("Comment", CommentSchema);
export default Comment;

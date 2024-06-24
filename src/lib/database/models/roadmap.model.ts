import { Schema, model, models } from "mongoose";

const RoadmapSchema = new Schema({
  title: { type: String, require: [true, "title is required."] },
  completed: { type: Boolean, default: false },
});

const Roadmap = models?.Roadmap || model("Roadmap", RoadmapSchema);
export default Roadmap;

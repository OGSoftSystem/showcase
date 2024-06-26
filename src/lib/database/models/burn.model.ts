import { Schema, model, models } from "mongoose";

const BurnSchema = new Schema({
  value: { type: String, require: [true, "value is required."] },
});

const Burn = models?.Burn || model("Burn", BurnSchema);
export default Burn;

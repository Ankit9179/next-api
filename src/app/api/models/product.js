import mongoose from "mongoose";

const mongoSchema = new mongoose.Schema({
  name: String,
  price: String,
  colore: String,
});

export const productModel =
  mongoose.models.products || mongoose.model("products", mongoSchema);

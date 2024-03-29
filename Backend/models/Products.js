const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  owner: { type: String, required: true },
  productName: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  cat: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pin: { type: Number, required: true },
  rating: [],
  feedback: [],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

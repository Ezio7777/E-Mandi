const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  OTP: {
    type: String,
    required: true,
  },

  deliver: {
    type: Boolean,
    default: false,
  },
  farmer_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  buyer_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  buyer_address: {
    city: String,
    state: String,
    pin: String,
  },
  farmer_address: {
    city: String,
    state: String,
    pin: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  //Product details
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  productName: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
  quantity: { type: String, required: true },
  description: { type: String, required: true },

  //Order Status
  payment_method: { type: String },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered"],
    default: "pending",
  },
  delivery_date: Date,
});
const Order = mongoose.model("order", OrderSchema);
module.exports = Order;

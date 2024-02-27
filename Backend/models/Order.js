const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  order_id: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  deliver: {
    type: Boolean,
    required: true,
  },
  farmer_id: {
    type: String,
    required: true,
  },
  buyer_id: {
    type: String,
    required: true,
  },
  address: [],
});
const Order = mongoose.model("order", OrderSchema);
module.exports = Order;

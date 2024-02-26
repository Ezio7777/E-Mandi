const mongoose = require("mongoose");
const { Schema } = mongoose;

const BuyerSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phno: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  order: [],
});
const Buyer = mongoose.model("farmer", BuyerSchema);
module.exports = Buyer;

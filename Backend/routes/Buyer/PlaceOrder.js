const express = require("express");
const Router = express.Router();
// const Product = require("../../models/Products.js");
// const User = require("../../models/User.js");
const Buyer = require("../../models/Buyer.js");
const Farmer = require("../../models/Farmer.js");
const Order = require("../../models/Order.js");
const fetchUser = require("../../middleware/fetchUserr.js");

// ROUTE 1: Place Order"
Router.post("/place", fetchUser, async (req, res) => {
  try {
    const code = uniqueCode();
    const farmer = await Farmer.findById(req.body.farmer_id);
    // const product = await Product.findById(req.body.productId);
    const buyer = await Buyer.findById(req.user.id);

    if (!farmer) {
      return res.status(404).json({ error: "Farmer not found" });
    }
    if (!buyer) {
      return res.status(404).json({ error: "Buyer not found" });
    }

    const fCity = farmer.city;
    const fState = farmer.state;
    const fPin = farmer.pin;

    const bCity = buyer.city;
    const bState = buyer.state;
    const bPin = buyer.pin;

    const newOrder = {
      OTP: code,
      deliver: false,
      farmer_id: req.body.farmer_id,
      buyer_id: req.user.id,
      buyer_address: {
        city: bCity,
        state: bState,
        pin: bPin,
      },
      farmer_address: {
        city: fCity,
        state: fState,
        pin: fPin,
      },

      productId: req.body.productId,
      productName: req.body.productName,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,

      payment_method: req.body.payment_method,
      status: "pending",
    };

    await Order.create(newOrder);

    res.status(201).json({
      success: true,
      OTP: code,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

const uniqueCode = () => {
  let code = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Include desired characters

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
};

module.exports = Router;

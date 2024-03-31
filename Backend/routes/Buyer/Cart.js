const express = require("express");
const Router = express.Router();
const Product = require("../../models/Products.js");
const User = require("../../models/User.js");
const Buyer = require("../../models/Buyer.js");
const fetchUser = require("../../middleware/fetchUserr.js");

// ROUTE 1: Create a new Product using:POST "/api/product/view".
Router.post("/add", fetchUser, async (req, res) => {
  try {
    const newItem = {
      productName: req.body.productName,
      quantity: req.body.quantity,
      description: req.body.description,
      price: req.body.price,
      cat: req.body.cat,
      date: req.body.date,
    };

    const response = await Buyer.updateOne(
      { _id: req.user.id },
      { $push: { cart: newItem } }
    );

    res.status(201).json({
      success: true,
      message: "add item successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;

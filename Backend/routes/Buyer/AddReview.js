const express = require("express");
const Router = express.Router();

const Buyer = require("../../models/Buyer.js");
const User = require("../../models/User.js");
const FeedBack = require("../../models/FeedBack.js");
const fetchUser = require("../../middleware/fetchUserr.js");

Router.post("/submit", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const name = user.name;
    const newFeedback = {
      name: name,
      review: req.body.review,
      rating: req.body.rating,
      productId: req.body.productId,
      date: new Date(),
    };
    await FeedBack.create(newFeedback);

    // Send success response
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;

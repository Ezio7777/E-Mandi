const mongoose = require("mongoose");

const mongoURI = "mongodb://0.0.0.0:27017/emandi";

const connectToMongo = () => {
  mongoose.connect(mongoURI).then(console.log("connected with mongoose"));
};

module.exports = connectToMongo;

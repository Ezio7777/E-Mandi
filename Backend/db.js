const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const mongoURI = `${process.env.MONGO_DB_URL}`;
console.log(process.env.MONGO_DB_URL);

const connectToMongo = () => {
  mongoose.connect(mongoURI).then(console.log("connected with mongoose"));
};

module.exports = connectToMongo;

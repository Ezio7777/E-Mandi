const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
app.use(cors());
app.use(express.json());

//Port No.
const port = 4000;

//Routes

//Authentication
app.use("/api/auth", require("./routes/auth"));

//Listing
app.use("/api/product", require("./routes/Farmer/listing.js"));

//View
app.use("/api/product", require("./routes/Buyer/View.js"));

//Listen
app.listen(port, () => {
  console.log(`connected with port no: ${port}`);
});

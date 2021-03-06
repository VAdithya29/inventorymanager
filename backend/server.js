const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to database.");
});

const itemsRouter = require("./routes/items");

app.use("/items", itemsRouter);

app.listen(port, () => {
  console.log("Server is running on http://localhost:5000");
});

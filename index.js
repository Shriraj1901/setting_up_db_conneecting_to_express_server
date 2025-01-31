
require("dotenv").config();
const express = require("express");
const { resolve } = require("path");
const mongoose = require("mongoose");

const mongoURI = process.env.URI;
const app = express();
const port = 3010;

app.use(express.static("static"));

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database."))
  .catch((err) => console.log(`Error: ${err}`));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
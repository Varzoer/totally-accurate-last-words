const express = require("express");
const path = require("path");
const app = express();

const homeRoute = require("./routes/home");
const joinRoute = require("./routes/join");
const createRoute = require("./routes/create");

app.use("/", homeRoute);
app.use("/join", joinRoute);
app.use("/create", createRoute);

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});

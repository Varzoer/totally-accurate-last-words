const express = require("express");
const path = require("path");
const router = express.Router();

router.use(express.static(path.join(__dirname, "../views")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "join.html"));
});

module.exports = router;

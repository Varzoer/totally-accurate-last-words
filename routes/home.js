const express = require("express");
const path = require("path");
const router = express.Router();

router.use(express.static(path.join(__dirname, "../views")));

router.use(
  express.static(path.join(__dirname, "../public"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "home.html"));
});

module.exports = router

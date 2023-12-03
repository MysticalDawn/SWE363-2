const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/form_page.html");
});

router.post("/submit", (req, res) => {
  res.sendFile(__dirname + "/done.html");
});

router.get("/submit", (req, res) => {
    res.sendFile(__dirname + "/done.html");
  });

router.get("/feedback", (req, res) => {
  res.send("Feedback page");
});

module.exports = router;

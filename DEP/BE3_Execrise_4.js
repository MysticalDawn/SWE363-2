const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const router = require("./route");

app.use("/", router);


app.use("/submit", (req, res, next) => {
  console.log("orjhej");
  if (req.body.password === "123") {
    res.status(400).send("weak password");
  } else {
    next();
  }
});

app.listen(3000, () => {
  console.log("Server is running...");
});

require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const port = process.env.PORT;

console.log(port);
app.get("/", (req, res) => {
  res.send("App is running 👻");
});

app.use("/api/v1/", router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

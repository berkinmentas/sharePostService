const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/test", (req, res) => {
  res.send("test passewd");
});

router.post("/register", userController.userRegister);

module.exports = router;

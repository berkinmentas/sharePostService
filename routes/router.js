const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/test", (req, res) => {
  res.send("test passewd");
});

router.post("/register", userController.userRegister);
router.post("/login", userController.userLogin);
router.post("/change-password", userController.changePassword);

module.exports = router;

const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { check } = require("express-validator");

router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),

    check("password", "Минимальная длина пароля 6 символов").isLength({
      min: 6,
    }),
  ],
  authController.register
);
router.post("/login", authController.login);
router.get("/users", authController.getAllUsers);

module.exports = router;

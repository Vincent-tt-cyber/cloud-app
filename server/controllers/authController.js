const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const pool = require("../db");

// const jwtSecret = "secret";

module.exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(fullName, email, hashedPassword);

  try {
    const [isUserAuth] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (isUserAuth.length > 0) {
      return res
        .status(409)
        .json({ message: "Пользователь с таким email уже существует." });
    }

    const result = await pool.query(
      "INSERT INTO `users`( `fullName`, `email`, `password`) VALUES (?,?,?)",
      [fullName, email, hashedPassword]
    );

    console.log("Новый пользователь успешно зарегистрирован => ", result);

    return res.status(201).json({
      message: "Пользователь успешно зарегистрирован.",
      fullName,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Не удалось зарегистрироваться." });
  }
};

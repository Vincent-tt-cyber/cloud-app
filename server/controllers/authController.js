const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");
const { validationResult } = require("express-validator");

const jwtSecret = "secret-cloud";

// Регистрация
module.exports.register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Ошибка при регистрации", errors: errors.array() });
  }

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

    const [result] = await pool.query(
      "INSERT INTO `users`( `fullName`, `email`, `password`) VALUES (?,?,?)",
      [fullName, email, hashedPassword]
    );

    console.log(
      "Новый пользователь успешно зарегистрирован => ",
      fullName,
      email
    );

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

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (user.length === 0) {
      return res.status(404).json({ message: "Пользователь не найден." });
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Неверный пароль." });
    }

    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });

    return res.json({
      message: "Пользователь успешно авторизован.",
      user,
      token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Не удалось авторизоваться.", error: err.message });
  }
};

// Пользователи
module.exports.getAllUsers = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM users");
  return res.json({
    users: result,
  });
};

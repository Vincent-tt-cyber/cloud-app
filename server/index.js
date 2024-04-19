const express = require("express");

const authRouter = require("./routes/authRoutes.routes");

const PORT = 3000;

const app = express();
app.use(express.json());

app.use("/api", authRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен - http://localhost:${PORT}`);
});

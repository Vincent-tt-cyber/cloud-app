import React from "react";
import Input from "../Input/Input";
import styles from "./Register.module.scss";
import { register } from "../../actions/user";

const Register = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="container">
      <div className={styles["register"]}>
        <div>
          <h1>Регистрация</h1>
          <Input
            value={fullName}
            setValue={setFullName}
            type="text"
            placeholder="Полное ФИО"
          />
          <Input
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="Электронная почта"
          />
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Пароль"
          />
          <button onClick={() => register(fullName, email, password)}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

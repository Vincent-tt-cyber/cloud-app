import React from "react";
import styles from "./Login.module.scss";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/slices/userSlice";
import { login } from "../../actions/user";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const loginUser = async () => {
    try {
      await login(email, password);
      dispatch(userLogin({ email, password }));
    } catch (err) {
      alert(err.message);
    }
  };

  React.useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className={styles["login"]}>
          <div>
            <h1>Войти</h1>
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
            <button onClick={loginUser}>Войти</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

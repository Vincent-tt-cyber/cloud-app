import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles["header-row"]}>
            <Link to="/" className={styles["header-logo"]}>
              <h1>Cloud App</h1>
            </Link>
            <ul className={styles["header-menu"]}>
              {isAuth ? (
                <button onClick={() => dispatch(userLogout())}>Выйти</button>
              ) : (
                <>
                  <Link to="/login">Войти</Link>
                  <Link to="/register">Регистрация</Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

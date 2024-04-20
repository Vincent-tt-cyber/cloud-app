import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles["header-row"]}>
            <Link to="/" className={styles["header-logo"]}>
              <h1>Cloud App</h1>
            </Link>
            <ul className={styles["header-menu"]}>
              <Link to="/login">Войти</Link>
              <Link to="/register">Регистрация</Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

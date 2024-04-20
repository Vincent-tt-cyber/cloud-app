import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  return (
    <>
      <input
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;

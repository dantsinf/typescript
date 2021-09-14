import React from "react";
import "./Input.css";

const Input = ({ error, label, name, ...rest }) => {
  return (
    <div className="inputGroup">
      <label htmlFor={name}>{label}</label>
      <input className={error ? "danger" : "success"} name={name} {...rest} />
      {error && <span>O valor deve ser maior que Zero</span>}
    </div>
  );
};

export default Input;

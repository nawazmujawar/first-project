"use client";
import React from "react";
import { login, logout } from "../lib/actions/auth";

const AuthBtn = ({ type }: { type: string }) => {
  const title = type === "login" ? "Login" : "Logout";
  const onClickHandler = () => {
    if (type === "login") {
      login();
    } else {
        logout()
    }
  };
  return (
    <button onClick={onClickHandler}>
      <span>{title}</span>
    </button>
  );
};

export default AuthBtn;

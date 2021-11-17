import "./diana.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

import { useAuth } from "../contexts/AuthContext";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import { Link } from "react-router-dom";

export default function Registerpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  return (
    <>
      <div className="bodyRegister">
        <div class="containerDi">
          <label
            for="show"
            class="close-btn fas fa-times"
            title="close"
          ></label>
          <div class="text">Вход</div>

          {/* form///// */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              if (!email || !password) {
                // Toastify({
                //   text: "This is a toast",
                //   className: "error",
                //   style: {
                //     background: "linear-gradient(to right, #00b09b, #96c93d)",
                //   },
                // }).showToast();
              }
              setIsSubmitting(true);
              login(email, password)
                .then((response) => {
                  navigate(-2)
                })
                .catch((error) => {
                  console.log(error.message);
                  Toastify({
                    text: error.message,
                    className: "error",
                    style: {
                      background:
                        "linear-gradient(to right, rgb(71, 22, 22), red)",
                    },
                  }).showToast();
                })
                .finally(() => setIsSubmitting(false));
            }}
          >
            <div class="data">
              <label>Ваш email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
              />
            </div>
            <div class="data">
              <label>Введите пароль</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="password"
              />
            </div>
            <div class="forgot-pass">
              <Link to="/forgot">
                <a href="#">Забыли пароль?</a>
              </Link>
            </div>
            <div class="btn">
              <div class="inner"></div>
              <button type="submit">войти</button>
            </div>
            <div class="signup-link">
              Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
            </div>
          </form>

          {/*  end of the form */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

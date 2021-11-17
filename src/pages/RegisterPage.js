import "./diana.css";
import { useState } from "react";
import { useNavigate } from "react-router";
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

  const { register, signInWithGoogle } = useAuth();

  return (
    <>
      <div className="bodyRegister">
        {/* <div class="center"> */}
        {/* <input type="checkbox" id="show" /> */}
        {/* <label for="show" class="show-btn">
            View Form
          </label> */}
        <div class="containerDi">
          <label
            for="show"
            class="close-btn fas fa-times"
            title="close"
          ></label>
          <div class="text">Регистрация</div>

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
              register(email, password)
                .then((response) => {
                  navigate(-1);
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

          // action="#"
          >
            <div class="data">
              <label>Ваш email</label>
              <input
                // value="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
              // required
              />
            </div>
            <div class="data">
              <label>Введите пароль</label>
              <input
                // value="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="password"
              // required
              />
            </div>

            <div class="forgot-pass">

            </div>
            <div class="btn">
              <div class="inner"></div>
              <button type="submit">зарегистрироваться</button>
            </div>
            {/* google sign in  */}
            <div class="btn">
              <div class="inner"></div>
              <button
                onClick={() =>
                  signInWithGoogle()
                    .then((user) => {
                      console.log(user);
                    })
                    .catch((e) => console.log(e.message))
                }
              >
                <img
                  width="20px"
                  height="20px"
                  class="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
                <span className="span1">Войдите с помощью Google аккаунта</span>
              </button>
            </div>

            <div class="signup-link">
              уже зарегистрированы? <Link to="/login">Войти</Link>
            </div>
          </form>

          {/*  end of the form */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

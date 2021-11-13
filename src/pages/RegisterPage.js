import "./diana.css";
import { useEffect, useRef, useState } from "react";
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

  const { register } = useAuth();

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
          <div class="text">Sign up Form</div>

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
                  console.log(response);
                  navigate("/");
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
              <label>Email or Phone</label>
              <input
                // value="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                // required
              />
            </div>
            <div class="data">
              <label>Password</label>
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
              <a href="#">Forgot Password?</a>
            </div>
            <div class="btn">
              <div class="inner"></div>
              <button type="submit">sign up</button>
            </div>
            <div class="signup-link">
              already a member? <Link to="/login">login</Link>
            </div>
          </form>

          {/*  end of the form */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

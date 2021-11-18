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

        <div class="containerDi">

          <Link to="/">
            <label
              for="show"
              class="close-btn fas fa-times"
              title="close"
            ></label>
          </Link>
          <div class="text">Sign Up </div>


          <form
            onSubmit={async (e) => {
              e.preventDefault();

              if (!email || !password) {

              }
              setIsSubmitting(true);
              register(email, password)
                .then((response) => {
                  navigate('/');
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
              <label>Email</label>
              <input
                // value="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
              // required
              />
            </div>
            <div class="data">
              <label>Write your password</label>
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
              <button type="submit">sign up</button>
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
                <span className="span1">Loge In with Google</span>
              </button>
            </div>

            <div class="signup-link">
              Already a member? <Link to="/login">Loge In</Link>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

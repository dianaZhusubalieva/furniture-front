import "./diana.css";
import { useState } from "react";
import { useNavigate, navigate } from "react-router-dom";
import React from "react";

import { useAuth } from "../contexts/AuthContext";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const { forgotPassword } = useAuth();

  return (
    <>
      <div className="bodyRegister">
        <div class="containerDi">
          <Link to="/login">
            <label
              for="show"
              class="close-btn fas fa-times"
              title="close"
            ></label>
          </Link>

          <div class="text">Forgot password</div>

          {/* form///// */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              try {
                await forgotPassword(email);
                Toastify({
                  text: "success! check your email",

                  style: {
                    background: "linear-gradient(to right, lightgreen, green)",
                  },
                }).showToast();
              } catch (error) {
                console.log(error.message);
                Toastify({
                  text: error.message,
                  className: "error",
                  style: {
                    background:
                      "linear-gradient(to right, rgb(71, 22, 22), red)",
                  },
                }).showToast();
              }
            }}
          >
            <div class="data">
              <label>Email or Phone</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
              />
            </div>

            <div class="btn">
              <div class="inner"></div>

              <button type="submit">submit</button>
            </div>
            <span className="or">or</span>

            <div class="btn">
              <div class="inner"></div>
              <Link to="/login">
                <button type="submit">login</button>
              </Link>
            </div>
          </form>

          {/*  end of the form */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,

//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDzYN1HlrTbJd3d43tZ0ZjFRM6GZj9mXVk",
  authDomain: "login-bce55.firebaseapp.com",
  projectId: "login-bce55",
  storageBucket: "login-bce55.appspot.com",
  messagingSenderId: "1036865623621",
  appId: "1:1036865623621:web:70f55362a2075ef367f52c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authh = getAuth(app);

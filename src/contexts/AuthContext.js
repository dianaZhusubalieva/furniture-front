import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { authh } from "../utils/InitFirebase";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
});
//! NAVBAR чтобы показать вошел или нет пользователь(если да то отобр имейла)
//  const {currentUser} = useAuth()

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authh, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // add in navbar
  // const {currentUser} = useAuth()
  // <h5>{JSON.stringify(currentUser.email)</h5>

  function register(email, password) {
    return createUserWithEmailAndPassword(authh, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(authh, email, password);
  }

  const value = { currentUser, register, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

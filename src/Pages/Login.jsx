import React, { useState } from "react";
import "../Style/SignUpForm.css";
import { Link } from "react-router-dom";
import { app } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-sides">
        <div className="signup-left">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">
              Email:
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="signup-right">
          <h2>Don't have an account?</h2>
          <Link className="login-link" to="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

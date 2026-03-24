import React, { useState } from "react";
import "../Style/SignUpForm.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const SignupForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      //  Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      //  Save extra data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
      });

      console.log("Account Created Successfully");

      //  Redirect after signup
      navigate("/");

    } catch (err) {
      alert(err.message); // show error
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-sides">

        <div className="signup-left">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            <label>
              Name:
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="signup-right">
          <h2>Already have an account?</h2>
          <Link className="login-link" to="/Login">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignupForm;
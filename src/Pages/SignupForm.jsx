import React, { useState } from "react";
import "../Style/SignUpForm.css"
import { Link } from "react-router-dom";
import { app } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const SignupForm = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");

const handleSubmit = async (e) =>{
  e.preventDefault()
  try{
     await createUserWithEmailAndPassword(auth, email , password)
     console.log("Account Created")
  }catch(err){
    console.log(err)
  }
}

  return (
    <div className="signup-container">
      <div className="signup-sides">
        <div className="signup-left">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="name">
              Name:
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor="email">
              Email:
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor="password">
              Password:
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="signup-right">
          <h2>Already have an account?</h2>
          <Link className="login-link" to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

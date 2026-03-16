import React, { useState } from "react";
import "../Style/SignUpForm.css"
import { Link } from "react-router-dom";
import { app } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const SignupForm = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

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
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="email">
          Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
      Password:
      <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Sign Up</button>
        <p>Already have an account?<Link to = "/Login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignupForm;

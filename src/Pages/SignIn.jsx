import { useState } from "react";

function Signin(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignin = async (e)=>{
    e.preventDefault();

    const response = await fetch("http://localhost:5000/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    if(response.ok){
      alert("Login successful");
      localStorage.setItem("user","loggedIn");
    }else{
      alert(data.message);
    }

  }

  return(
    <div style={{textAlign:"center"}}>

      <h2>Sign In</h2>

      <form onSubmit={handleSignin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Signin;
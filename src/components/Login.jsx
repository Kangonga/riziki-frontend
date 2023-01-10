import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import './userComponents/Login.css';
import { Navigate } from "react-router-dom";


export default function Login () {
   
    return (
        <>
        {/* {console.log(me)} */}
        {/* {user?console.log(user):""} */}
        {/* <Navigate to="/dashboard" />:<Loginone /> */}
        <LoginForm />
         </>
      )

}

//export default Login
function LoginForm() {
  const [loginData,setLoginData] = useState({
    username:"",
    password:"",
  })

  function handleChange(e){
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
        }
      )
    }

    function handleSubmit(e){
      e.preventDefault()
      console.log(loginData)

      fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
      })
      .then((resp)=>resp.json())
      .then(data=>console.log(data));
    }
    return(
      <div className="loginContainer">
        <div className="log-form-container">
            <h2>Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>

        <label htmlFor="username">username</label>
          <input
          id="username"
          name="username" 
          type= "text" 
          value={loginData.username}
          onChange={handleChange}
          placeholder="your username"
          required = 'required'
          />

        <label htmlFor="password">password</label>
          <input
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter password"
          required = 'required'
          />

        <button type="submit">Log In</button>
    
        </form>
        <Link to="/signup" className="link-btn" >Don't have an account? sign Up</Link>
    </div>
      </div>
    
    )
}

export function Login2 () {    
  return (
      <main id='loginPage'>
          <section id='loginContainer'>
            <h1>Login</h1>
            <form className="loginForm">
              <input 
              type="text" name="username" id="username" 
              placeholder='Enter your username'
              />
              <input 
              type="text" name="username" id="username" 
              placeholder='Enter your password'
              />
             <button>Login</button>
            </form>
            <Link to="/signup">Don't have an account? </Link>
          </section>
      </main>
    )

}
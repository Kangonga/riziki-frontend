import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import './userComponents/Login.css';
import { Navigate } from "react-router-dom";


export default function Login ({formSwitch}) {
    
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
    return(
      <div className="loginContainer">
        <div className="log-form-container">
            <h2>Login</h2>

        <form className="login-form" >

        <label htmlFor="email">username</label>
          <input
          id="username"
          name="username" 
          type= "text" 
          placeholder="your username"
          required = 'required'
          />

        <label htmlFor="password">password</label>
          <input
          id="password"
          name="password"
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

export function Login2 ({formSwitch}) {    
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
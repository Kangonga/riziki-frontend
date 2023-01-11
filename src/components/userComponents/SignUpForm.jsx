import './Profile.css'
import React, { useState} from 'react'
import {Link, Navigate} from "react-router-dom"


function SignUpForm() {
  const [loginData,setLoginData] = useState({
    username:"",
    password:"",
    role:""
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

    fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(loginData)
    })
    .then(resp=>{
      if(resp.ok){
        return resp.json()
      }
      else {
        console.log("errors")
      }
    })
    .then(data=>{
      // setUser(data)
      // console.log(user)
    }
    );
    <Navigate to="/login" />
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

        <label htmlFor="email">role</label>
        <select
        id="userRole"
        name="role" 
        required = 'required'
        value={loginData.role}
        onChange={handleChange}
        >
          <option value="user">Freelancer</option>
          <option value="employer">Client</option>
        </select>

      {/* {errors&& <ErrorDiv />} */}

      <button type="submit">Log In</button>

      </form>
      <Link to="/signup" className="link-btn" >Don't have an account? Sign Up</Link>
  </div>
    </div>
  )
  }
export default SignUpForm
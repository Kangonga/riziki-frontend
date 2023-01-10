import './Profile.css'
import React, { useState} from 'react'
import {Link} from "react-router-dom"


function SignUpForm() {
  return(
    <div className="loginContainer">
      <div className="log-form-container">
          <h2>Sign Up</h2>

      <form className="login-form" >

      <label htmlFor="email">Username</label>
        <input
        id="username"
        name="username" 
        type= "text" 
        placeholder="your username"
        required = 'required'
        />


      <label htmlFor="email">email</label>
        <input
        id="email"
        name="email" 
        type= "email" 
        placeholder="youremail@gmail.com"
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

      <label htmlFor="email">Role</label>
        <select
        id="userRole"
        name="role" 
        required = 'required'
        >
          <option value="user">Freelancer</option>
          <option value="Employer">Client</option>
        </select>


      <button type="submit">Sign Up</button>
  
      </form>
      <Link to="/login" className="link-btn" >Already have an account? Log In</Link>
  </div>
    </div>
  
  )
}

export default SignUpForm
import React from 'react'
import Profile from './Profile'
import './Profile.css'

function SignUpForm({formSwitch}) {
  return (
    <div>SignUpForm
         <button className="link-btn" onClick={() => formSwitch("login")}>Already have an  account? Login</button>

         <div >
         <Profile />
         </div>
    </div>
  )
}

export default SignUpForm
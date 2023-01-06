import React, { useState } from 'react'
import Profile from './Profile'
import './signup.css'


function SignUpForm({formSwitch}) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          role: role
        }
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'created') {
          window.location.replace('/login');
        } else {
          setError(data.errors);
        }
      })
      .catch((error) => console.log(error));
  }
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [description, setDescription] = useState("")
  // const [country, SetCountry] = useState("Kenya")

  
  return (
    <div>
         

         <div >
        <div className='container'>
          <form className='form-container' onSubmit={handleSubmit}>
            <h1>Let's get started 👋 </h1>
            <label htmlFor='username'>Username</label>
            <input
              type="text" name="username" placeholder="Enter your name" value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label >Role:</label>
            <select value={role} onChange={(event) => setRole(event.target.value)} className='select-input'>
              <option value="employee">Employee</option>
              <option value="jobseeker">Jobseeker</option>
              <option value="jobseeker">Admin</option>
            </select>
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor='passwordconfirmation'>Password Confirmation</label>
            <input type="password" name="passwordconfirmation" placeholder='Enter password confirmation'
              value={password}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            {/* <label htmlFor='country'>Country</label>
            <select name='country'
              value={country}
              onChange={(e) => SetCountry(e.target.value)}
            >
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Tanzania</option>
              <option>Rwanda</option>
              <option>Sudan</option>
              <option>Ethopia</option>
            </select> */}
            
            {/* <label htmlFor='description'>Description</label>
            <input type="text" name="description" placeholder='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            /> */}
          </form>
          <button type="submit">Submit</button>
          <button className="link-btn" onClick={() => formSwitch("login")}>Already have an  account? Login</button>
        </div>
        {error && <p className="register-error">{error}</p>}
         </div>
    </div>
  )
}

export default SignUpForm
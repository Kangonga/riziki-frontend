import React, {useState} from "react";
import './Login.css';
const Login = ({formSwitch}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }
return(
    <div className="log-form-container">
        <h2>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
    <label htmlFor="email">email</label>
    <input
    id="email"
    name="email" 
    type= "email" 
    placeholder="youremail@gmail.com"
    required = 'required'
    value = {email}
    onChange = {(e) => setEmail(e.target.value)}
    />
    <label htmlFor="password">password</label>
    <input
    id="password"
    name="password"
    type="password"
    placeholder="Enter password"
    required = 'required'
    value= {password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Log In</button>

    </form>
    <button className="link-btn" onClick={() => formSwitch("sign Up")}>Don't have an account? sign Up</button>
</div>
)
}

export default Login

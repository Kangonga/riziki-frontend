import React, {useState, useContext} from "react";
import './Login.css';
import { Navigate } from "react-router-dom";
// import { UserContext } from "./UserContext";
export default function Login ({formSwitch}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const {me,setMe} = useContext(UserContext)
    const [user,setUser] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
              password_confirmation: passwordConfirmation,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) =>{
                setUser(user)
                // setMe(user)
              }
              )
            }
              else {
              r.json().then((err) => console.log(err));
            }
          });
    }

    
    return (
        <>
        {/* {console.log(me)} */}
        {/* {user?console.log(user):""} */}
        {user? <Navigate to="/dashboard" />:<Loginone 
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        passwordConfirmation = {passwordConfirmation}
        setPassword = {setPassword}
        setPasswordConfirmation = {setPasswordConfirmation}
        setEmail = {setEmail}
        formSwitch = {formSwitch}
        />}
        </>
      )

}

//export default Login
function Loginone({handleSubmit,email,setEmail,setPassword,password,formSwitch}) {
    return(
      <div className="loginContainer">
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
      </div>
    
    )
}
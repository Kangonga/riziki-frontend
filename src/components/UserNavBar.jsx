import logo from "../assets/sitelogo.jpg"
import { Link } from "react-router-dom"
import "../userprofile.css"

export default function UserNavBar(){
    return(
        <>
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="/jobs">Find Jobs</Link>
            <Link to="/myjobs">My Jobs</Link>
            <Link to="/login" id="login">Login</Link>
            </nav>
            </header>
        </>
    )
}
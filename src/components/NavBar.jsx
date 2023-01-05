import { Link } from "react-router-dom"
import logo from "../assets/sitelogo.jpg"

export default function NavBar(){
    return(
        <>
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="/users">Find Talent</Link>
            <Link to="/jobform">Post a Job</Link>
            <Link to="/myjobs">My Jobs</Link>
            <Link to="/employerProfile">My Profile</Link>
            <Link to="/employers">Login</Link>
            </nav>
            </header>
        </>
    )
}
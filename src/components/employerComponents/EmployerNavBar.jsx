import { Link } from "react-router-dom"
import logo from "../../assets/sitelogo.jpg"

export default function EmployerNavBar(){
    return(
        <>
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="/userlist">Find Talent</Link>
            <Link to="/jobform">Post a Job</Link>
            <Link to="/employerJobs">My Jobs</Link>
            <Link to="/profile">My Profile</Link>
            <Link to="/employers" id="login">Login</Link>
            </nav>
            </header>
        </>
    )
}
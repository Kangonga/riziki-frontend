import { useContext, useState } from "react"
import { Link,Navigate } from "react-router-dom"
import { UserContext } from "../../App"
import logo from "../../assets/sitelogo.jpg"

export default function EmployerNavBar(){
    const {user,setUser} = useContext(UserContext)
    const [showNav,setShowNav] = useState(false)
    function logOut(){
        setUser({})
    }
    function handleMenu(){
        setShowNav(true)
    }
    return(
        <>
        {!user.username?<Navigate to="/login" />:null}
        <div className="hamburgerLines" onClick={handleMenu}>
            <span className="line line1"></span>
            <span className="line line1"></span>
            <span className="line line1"></span>
        </div>
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav className={showNav?"showDiv":""}>
            <Link to="/userlist">Find Talent</Link>
            <Link to="/jobform">Post a Job</Link>
            <Link to="/employerJobs">My Jobs</Link>
            <Link to="/profile">My Profile</Link>
            <Link to="/login" onClick={logOut} id="login">{user.id?"Log Out":"Log In"}</Link>
            </nav>
            </header>
        </>
    )
}
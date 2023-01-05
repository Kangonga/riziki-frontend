import logo from "../assets/sitelogo.jpg"
import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <>
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="/users">Find work</Link>
            <Link to="/employers">Find Talent</Link>
            <Link to="/employers">Login</Link>
            </nav>
            </header>
        </>
    )
}
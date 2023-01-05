// import NavBar from "./NavBar"
import TalentCards from "./TalentCards"
import Footer from "./Footer"
// import {UserCard} from "./Employers"
import logo from "../assets/sitelogo.jpg"
import { Link } from "react-router-dom"
import cta from "../assets/cta.jpg"

export default function LandingPage(){
    return (
        <div className="container" id="landingPageContainer">
           <NavBar />
            <main>
                <div id="employerContainer" className="dashboard">
                <figure>
                    <img className="heroImage" src={cta} alt="" />
                </figure>
                <section className="employerIntro">
                    <h1>
                        How hiring should work.
                    </h1>
                    <h2>
                        You can now hire the best talent in any given field.
                        We have the best there is out there, right here.
                    </h2>
                    <Link to="jobform">
                        Get Started
                    </Link>
                </section>
            </div>
                <TalentCards />
                <Footer />
            </main>  
        </div>
    )
}

function NavBar(){
    return(
        <>
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="/users">Find Jobs</Link>
            <Link to="/users">Find Talent</Link>
            {/* <Link to="/employerProfile">My Profile</Link> */}
            <Link to="/employers">Login</Link>
            </nav>
            </header>
        </>
    )
}
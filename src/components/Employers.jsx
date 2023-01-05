import Logo from "../assets/sitelogo.jpg"
import Footer from "./Footer"
import TalentCards from "./TalentCards"
import { Link } from "react-router-dom"
import logo from "../assets/sitelogo.jpg"

export default function Employers(){
    return(
        <>
        <NavBar />
            <div id="employerContainer">
                <UserCard />
                <section className="employerIntro">
                    <h1>
                        How hiring should work.
                    </h1>
                    <h2>
                        You can now hire the best talent in any given field.
                        We have the best there is out there, right here.
                    </h2>
                    <Link to="/jobForm">
                        Get Started
                    </Link>
                    {/* <Link to="jobForm">
                        Post a Job
                    </Link> */}
                </section>
            </div>
            <TalentCards />
            <Footer />
        </>
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
            <Link to="users">Find Talent</Link>
            <Link to="jobForm">Post a Job</Link>
            <Link to="myjobs">My Jobs</Link>
            <Link to="employerProfile">My Profile</Link>
            <Link to="/employers">Login</Link>
            </nav>
            </header>
        </>
    )
}

function UserCard(){
    return(
        <div id="userCard">
            <h1>My Profile</h1>
            <figure className="UserImage">
                <img className="profileImage" src={Logo}alt="Profile icon" />
            </figure>
            <input type="text" value="John Doe" name="employerName" id="username"/>
            <input type="text" value="Individual" name="company"/>
            <input type="text" value="Nairobi, Kenya" name="location"/>
            <input type="text" value="Posted Jobs: 0" name="postedJobs"/>
        </div>
    )
}
import Logo from "../assets/sitelogo.jpg"
import Footer from "./Footer"
import NavBar from "./NavBar"
import TalentCards from "./TalentCards"
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
                    <button>
                        Get Started
                    </button>
                    <button>
                        Post a Job
                    </button>
                </section>
            </div>
            <TalentCards />
            <Footer />
        </>
    )
}


function UserCard(){
    return(
        <div id="userCard">
            <h1>My Profile</h1>
            <figure className="UserImage">
                <img className="profileImage" src={Logo}alt="Profile Image" />
            </figure>
            <input type="text" value="John Doe" name="employerName" id="username"/>
            <input type="text" value="Individual" name="company"/>
            <input type="text" value="Nairobi, Kenya" name="location"/>
            <input type="text" value="Posted Jobs: 0" name="postedJobs"/>
        </div>
    )
}
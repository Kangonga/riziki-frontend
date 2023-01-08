import EmployerNavBar from "./EmployerNavBar"
import logo from "../../assets/sitelogo.jpg"


export default function UserList(){
    return (
        <body id="userlist">
            <EmployerNavBar />
            <section id="cardContainer">
                <div className="card">
                    <figure>
                        <img src={logo} alt="personIcon" />
                    </figure>
                    <section className="personalDetails">
                        <p>Name: John Doe</p>
                        <p>Main Skill: Ruby on Rails</p>
                        <p>Rating: 5/5</p>
                        <p>No. of Jobs: 1 job</p>
                        <p>Other Skills:</p>
                        <ul className="otherSkills">
                            <li>JavaScript</li>
                            <li>Sinatra</li>
                            <li>React JS</li>
                        </ul>
                    </section>
                </div>
            </section>
        </body>
    )
}
import { useState } from "react"
import EmployerNavBar from "./EmployerNavBar"
import cta from "../assets/cta.jpg"
import { Link } from "react-router-dom"


export default function EmployerJobs(){
    const [jobs,setJobs] = useState(1)
    return(
        <div id="EmployerJobsPage">
            <EmployerNavBar />
            <section id="employerJobsContainer">
                <NoJobs />
            </section>
        </div>
    )
}

function NoJobs(){
    return (
        <div className="container" id="landingPageContainer">
            <main>
                <div id="employerContainer" className="dashboard">
                <figure>
                    <img className="heroImage" src={cta} alt="" />
                </figure>
                <section className="employerIntro">
                    <h1>
                        You currently have no active jobs.
                    </h1>
                    <h2>
                        You can now hire the best talent in any given field.
                        We have the best there is out there, right here.
                    </h2>
                    <Link to="/jobform">
                        Get Started
                    </Link>
                </section>
            </div>
            </main>  
        </div>
    )
}

function JobCards(){
    return (
        <></>
    )
}
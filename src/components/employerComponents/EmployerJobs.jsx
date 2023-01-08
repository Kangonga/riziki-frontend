import { useState } from "react"
import EmployerNavBar from "./EmployerNavBar"
import cta from "../../assets/cta.jpg"
import { Link } from "react-router-dom"


export default function EmployerJobs(){
    const [jobs,setJobs] = useState(1)
    return(
        <div id="employerJobsPage">
            <EmployerNavBar />
            <section id="cardContainer">
                {/* <NoJobs /> */}
                <JobList />
                <JobList />
                <JobList />
                <JobList />
                <JobList />

            </section>
        </div>
    )
}

function JobList(){
    return(
        <>
                <div className="card">
                    <section className="jobDetails">
                    <h1>Job Title</h1>
                    <h2>Job Category</h2>
                        <p>Status: Complete/matched/active</p>
                        <p>Main Skill: Ruby on Rails</p>
                        <p>Experience Level: Expert/Intermediate/Junior</p>
                        <p>Name of contractor: name/none</p>
                        <p>Other Skills Needed:</p>
                        <ul className="otherSkills">
                            <li>JavaScript</li>
                            <li>Sinatra</li>
                            <li>React JS</li>
                        </ul>
                        <p>Job Description</p>
                        </section>
                </div>
        </>
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
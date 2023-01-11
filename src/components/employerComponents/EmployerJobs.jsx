import { useEffect, useState } from "react"
import EmployerNavBar from "./EmployerNavBar"
import cta from "../../assets/cta.jpg"
import { Link } from "react-router-dom"


export default function EmployerJobs(){
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        // fetch("url/id")
        // .then(resp=>resp.json())
        // .then(data=>setJobs(data))
    })
    return(
        <div id="employerJobsPage">
            <EmployerNavBar />
            <section id="cardContainer">
                {/* {!jobs? <NoJobs />: <JobList jobs={jobs}/>} */}
                <JobCard />
            </section>
        </div>
    )
}

// function JobList({jobs}){
//     return(
//         <>
//             {jobs?.map((job,index)=>{
//                 <JobCard key={index} job={job} />
//             })}
//         </>
//     )
// }

function JobCard({job}){
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
                {/* <p>Other Skills Needed:</p> */}
                
                <p>Job Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam quod eligendi cum praesentium nesciunt voluptatum quos. Voluptate, modi repellat!</p>
                {/* <ul className="otherSkills">
                    <li>JavaScript</li>
                    <li>Sinatra</li>
                    <li>React JS</li>
                </ul> */}
                <button id="addJob">Delete</button>
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
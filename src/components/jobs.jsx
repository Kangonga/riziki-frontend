import React, {useState, useEffect, useContext} from 'react'
import UserNavBar from './userComponents/UserNavBar'
import { UserContext } from '../App'


export default function Jobs() {
  const {user} = useContext(UserContext)
  const [jobs, setJobs] = useState([])
  const [job, setJob] = useState({
    jobseeker_id: "",
    job_id: "",
    employer_id: ""

  })
  const [status, setStatus] = useState("not applied")
  useEffect(() => {
    fetch("http://127.0.0.1:3000/jobs")
    .then(response => response.json())
    .then(data => {
          setJobs(data)
    }
    )
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/job_applications/`, {
            method: "POST",
            headers:{
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
              body: JSON.stringify({
                jobseeker_id: user?.id,
                job_id: e.target.id.value,
                employer_id: e.target.employer_Id.value
              })
          })
          .then(response => response.json())
          .then(() => {setStatus("applied")})   
  }
  

  return (
        <div className='userlist'>   
          <UserNavBar />              
            <section   id="cardContainer">           
            {jobs?.map((job,index) => {
                return(
                  <JobCard job={job} key={index}  handleSubmit={handleSubmit}/>
                )
              })}
              </section>      
        </div>
  )
 }


function JobCard ({job, handleSubmit}) {
  return(
    <form  onSubmit={handleSubmit} className="userJobsCard">
      <input type="hidden" name='id' value={job.id} />
      <input type="hidden" name='employer_Id' value={job.employer.id} />
      
      <h2>Job Title: {job.job_title}</h2>

      <h3>Job Category: {job.category}</h3>

      <textarea
      value={`Responsibilities: ${job.responsibilities}`}
      />
     
      <input
      value={`Salary: ${job.salary}`}
      />
 
        <textarea
      value={`Job Description: ${job.job_description}`}
       />

      <button>Apply</button>
     </form>
  )
}


// import NavBar from "./NavBar"

// export default function Jobs(){
//     return(
//         <main id="jobsPage">
//         <NavBar></NavBar>
//         <section id="cardContainer">
//                <Job /> 
//                <Job /> <Job /> 
//         </section>
//         </main>
        
//     )
// }
// function Job(){
//     return(
//         <>
//         <div id="jobsCard" className="card">
//                     <section className="jobDetails">
//                     <h1>Job Title</h1>
//                     <h2>Job Category</h2>
//                         <p>Status: Complete/matched/active</p>
//                         <p>Main Skill: Ruby on Rails</p>
//                         <p>Experience Level: Expert/Intermediate/Junior</p>
//                         <p>Name of contractor: name/none</p>
//                         <p>Other Skills Needed:</p>
//                         <ul className="otherSkills">
//                             <li>JavaScript</li>
//                             <li>Sinatra</li>
//                             <li>React JS</li>
//                         </ul>
//                         <p>Job Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam quod eligendi cum praesentium nesciunt voluptatum quos. Voluptate, modi repellat!</p>
//                         <button className="apply">Apply</button>
//                         </section>
//                 </div>
//         </>
//     )
// }
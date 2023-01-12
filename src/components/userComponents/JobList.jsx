import React, {useState, useEffect} from 'react'
import UserNavBar from './UserNavBar'
import '../../cards.css'
export default function JobList() {

  const [jobs, setJobs] = useState([])
  const [status, setStatus] = useState("not applied")
  useEffect(() => {
    fetch("http://127.0.0.1:3000/jobs")
    .then(response => response.json())
    .then(data => {console.log(data)
          setJobs(data)
    }
    )
  }, [])
  

  return (
        <div className='userlist'>
            
          <UserNavBar />
        
                        
            <section   id="cardContainer">
            
            {jobs?.map((job,index) => {
                return(
                  <JobCard job={job} key={index} handleClick={handleClick}/>
                )
              })}
              </section>
                  
      </div>   //className="card job-list"
   
  )
  // function handleClick() {
    // fetch(`http://localhost:3000/jobs/${jobs.id}`, {
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //     body: JSON.stringify(
    //       status
    //         )
    // })
    // .then(response => response.json())
    // .then((status) => {setStatus("applied")})
    // console.log("applied");

    // const data = { status: 'not applied' };

// fetch(`http://localhost:3000/jobs/${jobs.id}`, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//     setStatus("applied")
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
//   }
  
// }


function JobCard ({job, handleClick}) {
  return(
    <div className="card job-list">
    <h2>Job Title: {job.job_title}</h2>
<h3>Job Category: {job.category}</h3>
    <p>Main Skill: Ruby on Rails</p>
    <p>Responsibilities: {job.responsibilities} </p>
    <p>Salary: {job.salary}</p>
    <p>Status: open/closed</p>
    <p>No of applicants:</p>
    <ul className="otherSkills">
        <li>JavaScript</li>
        <li>Sinatra</li>
        <li>React JS</li>
    </ul>
    <p className='job-description'>Job Description: {job.job_description}</p>
    <button onClick={handleClick} className='button'>Apply</button>
     </div>
  )
}

// export default JobList
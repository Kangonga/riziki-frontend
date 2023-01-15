import React, {useState, useEffect} from 'react'
import { UserContext } from '../../App'
import UserNavBar from './UserNavBar'

 export default function UserJobs() {
  // const {user} = UserContext(UserContext)
  const [matchedJobs, setMatchedJobs] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/matched_jobs")
    .then(response => response.json())
    .then(data => {console.log(data)
          setMatchedJobs(data)
    }
    )
  }, [])

  return (
    <div className='userlist'>
       <UserNavBar/>
                       
        <section id='cardContainer' >
           {
            matchedJobs?.map((matchedJob, index) => {
              return(
                <MatchedJobs matchedJob={matchedJob} key={index}/>
              )
            })
           }
            </section>
              
    </div>
  )
}

// function MatchedJobs({matchedJob}) {
//   return(
//     <div className='card job-list'>
//       <h2>Job Title: {matchedJob.jobseeker_id}</h2>
//         <h3>Job Category</h3>
//             <p>Status: Complete/matched/active</p>
//             <p>Main Skill: Ruby on Rails</p>
//             <p>Experience Level: Expert/Intermediate/Junior</p>
//             <p>Name of contractor: name/none</p>
//             <p>Other Skills Needed:</p>
//             <ul className="otherSkills">
//                 <li>JavaScript</li>
//                 <li>Sinatra</li>
//                 <li>React JS</li>
//             </ul>
//             <p>Job Description</p>
//             <p>Rating:</p>
//     </div>
//   )
// }

function MatchedJobs({matchedJob}) {
  return(
    <div className='card job-list'>
      <h2>Job Title: {matchedJob.job.job_title}</h2>
        <h3>Company name: {matchedJob.job.company_name}</h3>
            <p><strong>Status:</strong> Complete/matched/active</p>
            <p><strong>Job Description:</strong> {matchedJob.job.job_description}</p>
            <p><strong>Responsibilities:</strong> {matchedJob.job.responsibilities}</p>
            <p><strong>Salary:</strong> {matchedJob.job.salary}</p>
            <p><strong>No of applicants:</strong> {matchedJob.job.number_of_applicants}</p>
    </div>
  )
}
//export default UserJobs
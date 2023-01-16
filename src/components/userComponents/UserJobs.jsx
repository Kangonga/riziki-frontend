import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../App'
import UserNavBar from './UserNavBar'

 export default function UserJobs() {
  const {user} = useContext(UserContext)
  const [matchedJobs, setMatchedJobs] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/matched_jobs")
    .then(response => response.json())
    .then(data=>setMatchedJobs(data.filter(job=>job.jobseeker_id == user?.id)))
    // .then(data => {
    //       setMatchedJobs(data.filter(job=>job.jobseeker_id == user?.id).filter((job,pos)=>{
    //         return data.indexOf(job)==pos
    //       }))
    // }
    // )
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



function MatchedJobs({matchedJob}) {
  return(
            <div className='userJobsCard'>
                  <h2>Job Title: {matchedJob.job.job_title}</h2>
                  <h3>Category: {matchedJob.job.category}</h3>
                  <textarea value={`Job Description: ${matchedJob.job.job_description}`}/>
                  <input value={`Salary: ${matchedJob.job.salary}`}/>
                  <input value={`Employer: ${matchedJob.employer.username}`}/>
                  <input value="Status: Active"/>
            </div>
  )
}
//export default UserJobs
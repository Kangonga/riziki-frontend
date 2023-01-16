import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../App'
import UserNavBar from './UserNavBar'

 export default function UserJobs() {
  const {user} = useContext(UserContext)
  const [matchedJobs, setMatchedJobs] = useState([])
  const [jobs, setJobs] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/matched_jobs")
    .then(response => response.json())
    .then(data => {
          setMatchedJobs(data.filter(job=>job.jobseeker_id == user?.id).filter((job,pos)=>{
            return data.indexOf(job)==pos
          }))
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



function MatchedJobs({matchedJob}) {
  return(
    <div className='card job-list'>
      <h2>Job Title: {matchedJob.job.job_title}</h2>
        <h3>Company name: {matchedJob.job.company_name}</h3>
            <p>Status: Complete/matched/active</p>
            <p>Job Description: {matchedJob.job.job_description}</p>
            <p>Responsibilities: {matchedJob.job.responsibilities}</p>
            <p>Salary: {matchedJob.job.salary}</p>
            <p>Employer: {matchedJob.employer.username}</p>
    </div>
  )
}
//export default UserJobs
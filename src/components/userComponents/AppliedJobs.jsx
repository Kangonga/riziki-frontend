import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../App'
import UserNavBar from './UserNavBar'

 export default function AppliedJobs() {
  const {user} = useContext(UserContext)
  const [appliedJobs, setappliedJobs] = useState([])
  const [jobs, setJobs] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/job_applications")
    .then(response => response.json())
    .then(data => {
          setappliedJobs(data.filter(job=>job.jobseeker_id == user?.id).filter((job,pos)=>{
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
            appliedJobs?.map((appliedJob, index) => {
              return(
                <UserAppliedJobs appliedJob={appliedJob} key={index}/>
              )
            })
           }
            </section>
              
    </div>
  )
}



function UserAppliedJobs({appliedJob}) {
  return(
    <div className='card job-list'>
      <h2>Job Title: {appliedJob.job.job_title}</h2>
        <h3>Company name: {appliedJob.job.company_name}</h3>
            <p>Status: Complete/applied/active</p>
            <p>Job Description: {appliedJob.job.job_description}</p>
            <p>Responsibilities: {appliedJob.job.responsibilities}</p>
            <p>Salary: {appliedJob.job.salary}</p>
            <p>Employer: {appliedJob.employer.username}</p>
    </div>
  )
}
//export default UserJobs
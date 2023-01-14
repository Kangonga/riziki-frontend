import userEvent from "@testing-library/user-event";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import EmployerNavBar from "./EmployerNavBar";
import logo from "../../assets/sitelogo.jpg"


export default function Applicants(){
    const {job_id}= useParams()
    const [jobseekers,setJobSeekers] = useState([])
    const [applicants,setJobApplicants] = useState([])
    const [applications,setJobApplications] = useState([])
    const [matchedJobs,setMatchedJobs] = useState([])
    const {user} = useContext(UserContext)
    useEffect(()=>{ 
        fetch("http://127.0.0.1:3000/job_applications")
        .then(resp=>resp.json())
        .then(data=>setJobApplications(data.filter(app=>app.job_id==job_id)));
    },[])

    useEffect(()=>{
        fetch("http://127.0.0.1:3000/jobseekers")
        .then(resp=>resp.json())
        .then(data=>{
            setJobSeekers(data)
        })
    },[])
    useEffect(()=>{
        setJobApplicants(jobseekers?.filter(user=>(Array.from(applications.map(app=>app.jobseeker_id)).includes(user.id))))
    },[])
    useEffect(()=>{
        fetch("http://127.0.0.1:3000/matched_jobs")
        .then(resp=>resp.json())
        // .then(data=>setMatchedJobs(data))
        .then(data=>setMatchedJobs(data.filter(app=>app.employer_id==user.id)))
    },[])
    function handleSubmit(e){
        e.preventDefault();
        const params={
                employer_id:user.id,
                job_id: job_id,
                jobseeker_id:e.target.id.value,
        }
        // console.log(params)
        fetch("http://127.0.0.1:3000/matched_jobs", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(params)
        })
        .then(resp=>console.log(resp.json()))
    }
    return(
        <>
            {/* {console.log(applicants)} */}
            <div id="userlist applicants">
            <EmployerNavBar />
            <section id="cardContainer">
               {applicants?.map((jobseeker,index)=>{
                return <UserCard user={jobseeker}key={index} handleSubmit={handleSubmit} matched={matchedJobs}/>
               })}
            </section>
            {console.log("matchde",matchedJobs)}
        </div>
        </>
    )
}

function UserCard({user,handleSubmit,matched}){
  
    return(
        <>
         <form className="card applicantCard" onSubmit={handleSubmit}>
                    <figure id="applicantFigure">
                        <img src={logo} alt="personIcon" />
                    </figure>
                    <section className="personalDetails">
                    <input type="hidden" name="id"value={`${user.id}`}/>
                        <input value={`username: ${user.username}`}/>
                        <input value={`skills: ${user.skills}`}/>
                        <input value={`job rating: ${user.rating}/5`}/>
                        <input value={`Jobs done: ${user.employers.length}`}/>
                        <button>{Math.max(...Array.from(matched?.map(job=>job.jobseeker_id)))>0?"Hired":"Hire"}</button>
                    </section>
            </form>
        </>
    )
}
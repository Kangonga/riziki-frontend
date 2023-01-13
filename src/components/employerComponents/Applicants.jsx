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
            setJobApplicants(jobseekers.filter(user=>(Array.from(applications.map(app=>app.jobseeker_id)).includes(user.id))))
        })
    },[])
    return(
        <>
            {console.log(applicants)}
            <div id="userlist applicants">
            <EmployerNavBar />
            <section id="cardContainer">
               {applicants?.map((user,index)=>{
                return <UserCard user={user}key={index} />
               })}
            </section>
        </div>
        </>
    )
}

function UserCard({user}){
    return(
        <>
         <form className="card applicantCard" onSubmit={e=>e.preventDefault()}>
                    <figure id="applicantFigure">
                        <img src={logo} alt="personIcon" />
                    </figure>
                    <section className="personalDetails">
                        <input value={`username: ${user.username}`}/>
                        <input value={`skills: ${user.skills}`}/>
                        <input value={`job rating${user.rating}/5`}/>
                        <input value={`${user.employers.length}`}/>
                        <button>Hire</button>
                    </section>
            </form>
        </>
    )
}
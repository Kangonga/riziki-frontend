import userEvent from "@testing-library/user-event";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";

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
            console.log("ids",jobseekers.filter(user=>(Array.from(applications.map(app=>app.jobseeker_id)).includes(user.id))))
        })
        // .then(console.log(x));
    },[])
    
    {console.log("apps",applications)
    console.log("seekers",jobseekers)
    console.log("ids",jobseekers.filter(user=>(Array.from(applications.map(app=>app.jobseeker_id)).includes(user.id))))          
    }
    return(
        <>

        </>
    )
}
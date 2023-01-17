import EmployerNavBar from "./EmployerNavBar"
import logo from "../../assets/sitelogo.jpg"
import { useEffect, useState } from "react"
import "../../cards.css"

export default function UserList(){
    const [userList,setUserList] = useState([])
    const [userJobs,setUserJobs] = useState([])
    useEffect(()=>{
        const fetchdata = async()=>{

            await fetch("http://127.0.0.1:3000/jobseekers")
            .then(response => response.json())
            .then(data=>setUserList(data))

            await fetch("http://127.0.0.1:3000/matched_jobs")
            .then(response => response.json())
            .then(data=>setUserJobs(data))
        }
        fetchdata()
    },[])
    return (
        <div id="userlist">
            <EmployerNavBar />
            <section id="cardContainer">
               {userList?.map((user,index)=>{
                return <UserCard user={user}key={index} jobs={userJobs} />
               })}
            </section>
        </div>
    )
}

function UserCard({user,jobs}){
    return(
        <>
         <div className="card">
                    <figure>
                        <img src={logo} alt="personIcon" />
                    </figure>
                    <section className="personalDetails">
                        <p>Name: {user.username}</p>
                        <p>Main Skill: {user.skills}</p>
                        <p>Rating: {user.rating}/5</p>
                        <p>No. of Jobs: {jobs?.filter(job=>job.jobseeker_id==user.id).length}</p>
                        <p>Other Skills: soft skills</p>
                    </section>
                </div>
        </>
    )
}
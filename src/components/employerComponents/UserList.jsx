import EmployerNavBar from "./EmployerNavBar"
import logo from "../../assets/sitelogo.jpg"
import { useEffect, useState } from "react"


export default function UserList(){
    const [userList,setUserList] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:3000/jobseekers")
        .then(response => response.json())
        .then(data=>setUserList(data))
    })
    return (
        <div id="userlist">
            <EmployerNavBar />
            <section id="cardContainer">
               {userList?.map((user,index)=>{
                return <UserCard user={user}key={index} />
               })}
            </section>
        </div>
    )
}

function UserCard({user}){
    return(
        <>
         <div className="card">
                    <figure>
                        <img src={logo} alt="personIcon" />
                    </figure>
                    <section className="personalDetails">
                        <p>Name: {user.username}</p>
                        <p>Main Skill: {user.skills}</p>
                        <p>Rating: {user.rating}</p>
                        <p>No. of Jobs: {user.jobs_done}</p>
                        <p>Other Skills: soft skills</p>
                        {/* <ul className="otherSkills">
                            <li>JavaScript</li>
                            <li>Sinatra</li>
                            <li>React JS</li>
                        </ul> */}
                    </section>
                </div>
        </>
    )
}
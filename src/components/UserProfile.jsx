import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/sitelogo.jpg"
import UserNavBar from "./UserNavBar"
import EmployerNavBar from "./EmployerNavBar"

export default function UserProfile(){
    const [isEmployer,setIsEmployer] = useState(true)
    return(
        <>
        {isEmployer?<EmployerNavBar/>:<UserNavBar/>}
        <section id="userProfileContainer">
            
        </section>
        </>
    )
}
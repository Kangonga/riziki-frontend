import Logo from "../assets/sitelogo.jpg"
import NavBar from "./NavBar"
export default function Employers(){
    return(
        <>
        <NavBar />
            <div id="employerContainer">
                <UserCard />
            </div>
        </>
    )
}



function UserCard(){
    return(
        <div id="userCard">
            <figure className="UserImage">
                <img className="profileImage" src={Logo}alt="Profile Image" />
            </figure>
            <input type="text" value="John Doe" name="employerName" id="username"/>
            <input type="text" value="Individual" name="company"/>
            <input type="text" value="Nairobi, Kenya" name="location"/>
        </div>
    )
}
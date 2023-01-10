import UserNavBar from "./UserNavBar"
import Logo from "../../assets/sitelogo.jpg"
import { useContext } from "react"
import { UserContext } from "../../App"


export default function UserProfile(){
    const {user,setUser} = useContext(UserContext)
    return(
        <>
        <UserNavBar />
        {user.id&& <UserProfileContainer user={user}/>}
 
        </>
        
    )
}

function UserProfileContainer({user}){
    return(
        <>
               <div id="userProfileContainer">
              <div id="userProfile">
              <h1> {user.username}'s Profile</h1>
                <figure id="userImage">
                    <img  src={Logo}alt="Profile icon" />
                </figure>
                <form id="userProfileForm">     
                    <div className="profileInput">
                        <label htmlFor="company">Name:</label>
                        <input type="text" name="username" value={user?.username}/>
                    </div>
    
                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Job Bids Sent Out:</label>
                        <input type="text" value={0} required name="applied_jobs"/>
                    </div>

                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Accepted Applications:</label>
                        <input type="text" value={0} required name="matched_jobs"/>
                    </div>

                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Active Jobs</label>
                        <input type="text" value={0} required name="matched_jobs"/>
                    </div>
    
                    <div className="profileInput">
                        <label htmlFor="email">Email:</label>
                        <input type="text" value={user?.email} name="email"/>
                    </div>
    
                    <div className="profileInput"> 
                        <label htmlFor="">Password:</label>
                        <input type="password" value={user?.password} name="password"/>
                    </div>
                    <div className="buttonContainer">
                        <button>Edit</button> 
                        <button>Save</button> 
                    </div>
                               
                </form>
            </div>
        </div>
        </>
    )
}
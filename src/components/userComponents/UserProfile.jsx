import UserNavBar from "./UserNavBar"
import Logo from "../../assets/sitelogo.jpg"


export default function UserProfile(){
    return(
        <>
        <UserNavBar />
        <div id="userProfileContainer">
              <div id="userProfile">
              <h1>My Profile</h1>
                <figure id="userImage">
                    <img  src={Logo}alt="Profile icon" />
                </figure>
                <form id="userProfileForm">      
                    <div className="profileInput">
                        <label htmlFor="company">Name:</label>
                        <input type="text" name="username"/>
                    </div>
    
                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Job Bids Sent Out:</label>
                        <input type="text" required name="applied_jobs"/>
                    </div>

                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Accepted Applications:</label>
                        <input type="text" required name="matched_jobs"/>
                    </div>

                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Active Jobs</label>
                        <input type="text" required name="matched_jobs"/>
                    </div>
    
                    <div className="profileInput">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email"/>
                    </div>
    
                    <div className="profileInput"> 
                        <label htmlFor="">Password:</label>
                        <input type="text" name="password"/>
                    </div>
                    <div className="buttonContainer">
                        <button>Edit</button> 
                        <button>Save</button> 
                    </div>
                               
                </form>
            </div>
        </div></>
        
    )
}
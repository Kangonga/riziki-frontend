import NavBar from "./NavBar"

export default function Jobs(){
    return(
        <main id="jobsPage">
        <NavBar></NavBar>
        <section id="cardContainer">
               <Job /> 
               <Job /> <Job /> 
        </section>
        </main>
        
    )
}
function Job(){
    return(
        <>
        <div id="jobsCard" className="card">
                    <section className="jobDetails">
                    <h1>Job Title</h1>
                    <h2>Job Category</h2>
                        <p>Status: Complete/matched/active</p>
                        <p>Main Skill: Ruby on Rails</p>
                        <p>Experience Level: Expert/Intermediate/Junior</p>
                        <p>Name of contractor: name/none</p>
                        <p>Other Skills Needed:</p>
                        <ul className="otherSkills">
                            <li>JavaScript</li>
                            <li>Sinatra</li>
                            <li>React JS</li>
                        </ul>
                        <p>Job Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam quod eligendi cum praesentium nesciunt voluptatum quos. Voluptate, modi repellat!</p>
                        <button className="apply">Apply</button>
                        </section>
                </div>
        </>
    )
}
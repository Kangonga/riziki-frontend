import EmployerNavBar from "./EmployerNavBar";
import "../../jobform.css"
import { useState } from "react";

export default function AddJob(){
    const [jobData,setJobData] = useState({
        category:"",
        job_title:"",
        job_description:"",
        salary:"",
        number_of_applicants:0,
    })
    function handleChange(e){
        setJobData({
            ...jobData,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch("url/user.id",{
            method:"POST",
            headers:{"content-type": "application/"},
            body:JSON.stringify(jobData)
        })
        console.log(jobData)
    }

return (
    <div id="jobFormPage">
        <EmployerNavBar />
        <section id="formContainer">
            <h1>Add a job</h1>
            <p>You know what you are looking for, We help you find them.</p>
            <p>Post your open positions and hire the best talent.</p>
            <form id="addJob" onSubmit={handleSubmit}>

            <div className="formLabels">
                <label htmlFor="category">Job Category:*</label>
                <input type="text" value={jobData.category} onChange={handleChange} required name="category"/>
            </div>


            <div className="formLabels">
                <label htmlFor="company">Job Title:</label>
                <input type="text"value={jobData.title} onChange={handleChange} name="job_title"/>
            </div>

            <div className="formLabels">
                <label htmlFor="company">Job Description:</label>
            <textarea id="jobDesc" type="text" value={jobData.job_description} onChange={handleChange} name="job_description"></textarea>
            </div>

            <div className="formLabels"> 
                <label htmlFor="company">Compensation:</label>
                <input type="text" value={jobData.salary} onChange={handleChange} name="salary"/>
            </div>

            <div className="formLabels">
                <label htmlFor="company">Status:</label>
                <input type="text" name="status" />
            </div>

            <div className="formLabels">
                <label htmlFor="applicants">No. Of Applicants:</label>
                <input type="text" value={"yow"} name="number_of_applicants" onChange={handleChange}/>
            </div>

            <button>Submit</button>            
            
        </form>
        </section>
        
    </div>
)
}
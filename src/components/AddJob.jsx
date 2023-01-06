import EmployerNavBar from "./EmployerNavBar";
import "../jobform.css"

export default function AddJob(){
return (
    <div id="jobFormPage">
        <EmployerNavBar />
        <section id="formContainer">
            <h1>Add a job</h1>
            <p>You know what you are looking for, We help you find them.</p>
            <p>Post your open positions and hire the best talent.</p>
            
            <form id="addJob">
            
                <div className="formLabels">
                    <label htmlFor="company">Company Name:</label>
                    <input type="text" name="company"/>
                </div>

                <div className="formLabels">
                    <label htmlFor="category">Job Category:*</label>
                    <input type="text" required name="category"/>
                </div>


                <div className="formLabels">
                    <label htmlFor="company">Job Title:</label>
                    <input type="text" name="job_title"/>
                </div>

                <div className="formLabels">
                    <label htmlFor="company">Job Description:</label>
                <textarea id="jobDesc" type="text" name="job_description"></textarea>
                </div>

                <div className="formLabels"> 
                    <label htmlFor="company">Compensation:</label>
                    <input type="text" name="salary"/>
                </div>

                <div className="formLabels">
                    <label htmlFor="company">Status:</label>
                    <input type="text" name="status" />
                </div>

                <div className="formLabels">
                    <label htmlFor="applicants">No. Of Applicants:</label>
                    <input type="text" value="0"/>
                </div>

                <button>Submit</button>            
                
            </form>
        </section>
        
    </div>
)
}
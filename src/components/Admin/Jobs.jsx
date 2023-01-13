import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {MdAdd} from "react-icons/md"
import AddJob from './AddJob'
import {Link} from 'react-router-dom';
import { Dashboard } from '@material-ui/icons';
import Employers from './Employers';

function Jobs () {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('https://riziki.onrender.com/jobs')
        .then(resp => resp.json())
        .then(jobs => {
            setJobs(jobs)
             console.log(jobs)
        })
       

    },[])

     const addJob = (job) => {
        setJobs([...jobs, job]);

    }
     <AddJob  addJob={addJob}/>
  return (
    <div>
       <div><h1>Posted Jobs</h1></div>

       {/* <Link to="/appli"><button>Create</button></Link> */}

       <Link to="./new">
<Button >Create</Button>
</Link>

       
       
       <table className='table table-bordered  table table-hover'>
<thead>
					<tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll"/>
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Company Name</th>
            {/* <th>Email</th> */}
            <th>Category</th>
            <th>Job Tittle</th>
            
            <th>Jobs Description</th> 
            { <th>Responsibilities</th> }
            <th>Salary</th>
            <th>Delete</th>
						</tr>
				</thead>
				<tbody>
        {jobs.map((job)=> (
					<tr key={job.id}>
						<td >
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
								<label for="checkbox1"></label>
							</span>
						</td>
						<td>{job.company_name}</td>
						<td>{job.category}</td>
                        <td>{job.job_title}</td>
                        <td>{job.job_description}</td>
                        <td>{job.responsibilities}</td>
                        <td>{job.salary}</td>

                        
                         <td> <button id='btn'>Edit</button></td>
                        {/* <td>{employer.jobs.category}</td>
            
            <td style={{color: "green"}}>Edit</td>
             {/* <td>{bus.plate_number}</td> */}
					</tr>
				))}
				</tbody>
			</table>

     


       </div>
  )
}

export default Jobs
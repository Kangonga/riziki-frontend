import React, { useEffect, useState } from 'react'





const Jobseekers = () => {
    const[jobseekers,setJobSeekers]= useState([])

    useEffect(() => {
        fetch("https://riziki.onrender.com/jobseekers")
        .then((resp)=> resp.json())
        .then((jobseekers) => setJobSeekers(jobseekers))

    },[])

    function deleteJobseeker(jobseekerId){
      setJobSeekers(jobseekers.filter((jobseeker) => {
        return jobseeker.id !== jobseekerId
      }
      ))
      fetch("https://riziki.onrender.com/jobseekers/" + jobseekerId, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => deleteJobseeker(jobseekerId))

    }





   
  return (
    <div >

        <div><h1>JobSeekers Information</h1></div>
       <table className='table table-bordered  table table-hover'>
<thead>
					<tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll"/>
								<label for="selectAll"></label>
							</span>
						</th>
						<th>UserName</th>
            {/* <th>Email</th> */}
            <th>Rating</th>
            <th>Skills</th>
            <th>Jobs Done</th>
            
            {/* <th></th> */}
            <th>Edit Details</th>
						</tr>
				</thead>
				<tbody>
        {jobseekers.map((jobseeker)=> (
					<tr key={jobseeker.id}>
						<td >
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
								<label for="checkbox1"></label>
							</span>
						</td>
						<td>{jobseeker.username}</td>
						<td>{jobseeker.rating}</td>
                        <td>{jobseeker.skills}</td>
                        <td>{jobseeker.jobs_done}</td>

                      

                         <td ><button id='btndelete' onClick={() => deleteJobseeker(jobseeker.id)} >Delete</button></td>
                         
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

export default Jobseekers
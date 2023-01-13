import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";


const columns = [
  { field: 'id', headerName: 'User ID', width: 70 },
  { field: 'jobseeker_id', headerName: 'User ID', width: 70 },
   { field: 'category', headerName: 'Category', width: 300, 
  valueGetter:(users)=> users.row.job.category},
  { field: 'job_title', headerName: 'Job Title', width: 300, 
  valueGetter:(users)=> users.row.job.job_title},
 
  
];


const Applications = () => {
  const [users,setUsers]= useState([]);
  const [pageSize, setPageSize] = useState(10)

  useEffect(()=>{
    fetch('https://riziki.onrender.com/job_applications')
      .then(response => response.json())
      .then((json)=> setUsers(json))
     
  }, [])


  return(


    <div style={{ width: '100%', height: 700 }}>
  
   
    <DataGrid
    rows={users}
    columns={columns}
    pageSize={pageSize}
    rowsPerPageOptions={[8,5,10]}
    onPageSizeChange = {(newPageSize) => setPageSize(newPageSize)}
    checkboxSelection
    />
 
</div>
    
  )





}
  export default Applications
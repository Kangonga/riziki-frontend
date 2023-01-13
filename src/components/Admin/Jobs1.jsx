import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";


const columns = [
  { field: 'id', headerName: 'User ID', width: 70 },
  { field: 'username', headerName: 'UserName', width: 70 },
  { field: 'rating', headerName: 'Company', width: 140 },
  { field: 'skills', headerName: 'Category', width: 130 },
  { field: 'jobs_done', headerName: 'Job Title', width: 130 },
  
];


const Jobseekers = () => {
  const [users,setUsers]= useState([]);

  useEffect(()=>{
    fetch('https://riziki.onrender.com/jobs')
      .then(response => response.json())
      .then((json)=> setUsers(json))
     
  }, [])


  return(


    <div style={{ width: '100%', height: 700 }}>
  
   
    <DataGrid
    rows={users}
    columns={columns}
    pageSize={8}
    checkboxSelection
    />
 
</div>
    
  )





}
  export default Jobseekers
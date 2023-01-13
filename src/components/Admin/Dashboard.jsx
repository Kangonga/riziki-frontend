

import {BsFillPersonFill,BsPeopleFill} from "react-icons/bs"
import {MdWork} from "react-icons/md"
import {FaSuitcase} from "react-icons/fa"
import {IconContext} from 'react-icons'
import {React, useEffect, useState} from "react";

// import Customers from "./Customers";


// import Driver from "../Driver/Driver";
// import Bookings from "./Bookings";
// import Drivers from "./Drivers";
// import Buses from "./Buses";
// import Admin from "./Admin";
function Dashboard () {
    

   
    // const [counter, setcounter]= useState(0)
    // function increase (){
    //     if(bookings.length >0)
    //     setcounter(count => count + 1);
    // }
    
    const [employers, setEmployers] = useState([])
     const [jobseekers, setJobseekers] = useState([])
     const [applications, setApllications] = useState([])
      const [jobs, setJobs] = useState([])


    useEffect(()=>{
        fetch("https://riziki.onrender.com/employers")
        .then(resp => resp.json())
        .then((data) => {
            setEmployers(data)
        })
    }, [])

     useEffect(()=>{
        fetch("https://riziki.onrender.com/jobseekers")
        .then(resp => resp.json())
        .then((data) => {
            setJobseekers(data)
        })
    },[])

    useEffect(()=>{
        fetch("https://riziki.onrender.com/job_applications")
        .then(resp => resp.json())
        .then((data) => {
            setApllications(data)
        })
    },[])

     useEffect(()=>{
        fetch("https://riziki.onrender.com/jobs")
        .then(resp => resp.json())
        .then((jobs) => {
            setJobs(jobs)
        })
    },[])

   
    


    return (
        <>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" >
                        
                        <div className="card h-100" style={{backgroundColor:"#6f42c1"}} >
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div >
                               <span className="reacticons">
                                 <BsPeopleFill  />
                               </span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">0</h5>
                                <p className="card-text">Total Users</p>
                            </div>
                            <a href="/users" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#8bc740"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div >
                               <span className="reacticons">
                                 <BsPeopleFill  />
                               </span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{employers.length}</h5>
                                <p className="card-text">Total Employers</p>
                            </div>
                            <a href="/mainpage/employers" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#20c997"}}>
                            {/* <img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579__340.png" className="card-img-top" alt="..." style={{width:"200px"}}/> */}
                            <div >
                               <span className="reacticons">
                                 <BsPeopleFill  />
                               </span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{jobseekers.length}</h5>
                                <p className="card-text">Total JobSeekers</p>
                            </div>
                            <a href="/mainpage/jobseekers" className="small-box-footer" style={{textDecoration: 'none', color:'black'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#48a9f8"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div >
                               <span className="reacticons">
                                 <MdWork />
                               </span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{jobs.length}</h5>
                                <p className="card-text">Posted Jobs</p>
                            </div>
                            <a href="/mainpage/jobs" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#fe8024"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div >
                               <span className="reacticons">
                                 <FaSuitcase />
                               </span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{applications.length}</h5>
                                <p className="card-text">Total Applications </p>
                            </div>
                            <a href="/mainpage/applications" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#b1b1b1"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                {/* <h5 className="card-title">0</h5> */}
                                <p className="card-text"></p>
                            </div>
                            <a href="admin" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;
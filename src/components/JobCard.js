import React from 'react'
import './JobCard.css'
//https://www.upwork.com/freelance-jobs/react-js/
const JobCard = () => {
  return (
    <div className='job-container'>
      <div className='header'><h1>Find the best React.js jobs</h1> <br></br>
        <p>It takes just one job to develop a successful relationship that can propel your career forward.</p>
        <button>Find Work</button>
        <div className='rating'>
          <h2>Professionals on Upwork rate clients </h2>
        </div>
      </div>
      
    </div>
  )
}

export default JobCard
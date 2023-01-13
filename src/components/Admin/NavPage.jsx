import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Admin from "./Admin";
import Employers from "./Employers";
import Jobs from "./Jobs";
import Jobseekers from "./Jobseekers"
import Applications from "./Applications"
import Jobseeker from "./Jobseeker";
import AddJob from "./AddJob";
import Jobs1 from "./Jobs1";







function NavPage() {
    return (
       <>

        

            <Routes>
                <Route path="/*" element={<Dashboard/>}/>
                <Route path="/admin" element={<Admin/>}/>
                 <Route path="/employers" element={<Employers/>}/>
                  <Route path="/jobs" element={<Jobs/>} />
                  <Route path="/jobseekers" element={<Jobseekers/>} />
                  <Route path="/applications" element={<Applications/>} />
                  <Route path="/jobseeker" element={<Jobseeker/>} />
                  <Route path="/jobs/new" element={<AddJob />} />
                  
                
            </Routes>

       
            
        </>
    )
}
export default NavPage;
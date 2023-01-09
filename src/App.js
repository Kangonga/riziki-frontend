import {Routes, Route} from "react-router-dom"
import Employers from "./components/employerComponents/Employers";
import LandingPage from "./components/landingPage";
import AddJob from "./components//employerComponents/AddJob"
// import Profile from "./components//employerComponents/Profile";
import EmployerProfile from "./components/employerComponents/EmployerProfile";
import EmployerJobs from "./components//employerComponents/EmployerJobs";
import Cards from "./components/Cards";
import './employers.css'
import UserList from "./components/employerComponents/UserList";
import { useState } from "react";
import Login from "./components/userComponents/Login";
import UserProfile from "./components/userComponents/UserProfile";
import SignUpForm from "./components/userComponents/SignUpForm";
import JobList from "./components/userComponents/JobList";
import UserJobs from "./components/userComponents/UserJobs";

function App() {
  const [user,setUser] = useState(false);
  return (
  <>
   <Routes>
     <Route path="/" element={<LandingPage />} />
     <Route path="/employers/*" element={<Employers />} />
     <Route path="/jobform" element={<AddJob />} />
     <Route path="/profile" element={<EmployerProfile />} />
     <Route path="/employerJobs" element={<EmployerJobs />} />
     <Route path="/cards" element={<Cards />} />
     <Route path="/userlist" element={<UserList />} />
     <Route path="/login" element={<Login />} />
     <Route path="/userprofile" element={< UserProfile/>} />
     <Route path="/signup" element={<SignUpForm />} />
     <Route path="/joblist" element={<JobList />} />
     <Route path="/userjobs" element={<UserJobs />} />
    </Routes>    
    </>
   
  );
}

export default App;

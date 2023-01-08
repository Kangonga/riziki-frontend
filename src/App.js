import {Routes, Route} from "react-router-dom"
import Employers from "./components/Employers";
import LandingPage from "./components/landingPage";
import AddJob from "./components/AddJob"
import Profile from "./components/Profile";
import EmployerJobs from "./components/EmployerJobs";
import Cards from "./components/Cards";
import './employers.css'
import UserList from "./components/UserList";
import { useState } from "react";
import Login from "./userComponents/Login";
import {UserProfile} from "./userComponents/Profile";
// import UserProfile from "./components/Profile";
import SignUpForm from "./userComponents/SignUpForm";

function App() {
  const [user,setUser] = useState(false);
  return (
  <>
   <Routes>
     <Route path="/" element={<LandingPage />} />
     <Route path="/employers/*" element={<Employers />} />
     <Route path="/jobform" element={<AddJob />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/employerJobs" element={<EmployerJobs />} />
     <Route path="/cards" element={<Cards />} />
     <Route path="/usercards" element={<UserList />} />
     <Route path="/login" element={<Login />} />
     <Route path="/userprofile" element={< UserProfile/>} />
     <Route path="/signup" element={<SignUpForm />} />
      {/* 
      <Route path="/users" element={<Users/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/jobs" element={<Jobs/>} />
      <Route path="/employers" element={<Employers/>} /> */}
    </Routes>    
    </>
   
  );
}

export default App;

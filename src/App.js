import {Routes, Route} from "react-router-dom"
import Employers from "./components/Employers";
import LandingPage from "./components/landingPage";
import AddJob from "./components/AddJob"
import Profile from "./components/Profile";
import EmployerJobs from "./components/EmployerJobs";
import Cards from "./components/Cards";
import './employers.css'



function App() {
  return (
  <>
   <Routes>
     <Route path="/" element={<LandingPage />} />
     <Route path="/employers/*" element={<Employers />} />
     <Route path="/jobform" element={<AddJob />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/employerJobs" element={<EmployerJobs />} />
     <Route path="/cards" element={<Cards />} />
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

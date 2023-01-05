import {Routes, Route} from "react-router-dom"
import Employers from "./components/Employers";
import LandingPage from "./components/landingPage";
import AddJob from "./components/AddJob"
import './employers.css'

function App() {
  return (
  <>
   <Routes>
     <Route path="/dashboard" element={<LandingPage />} />
     <Route path="" element={<Employers />} />
     <Route path="/jobform" element={<Employers />} />
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

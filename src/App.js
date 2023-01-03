import {Routes, Route} from "react-router-dom"
import LandingPage from "./components/landingPage";

function App() {
  return (
  <>
   <Routes>
     <Route path="" element={<LandingPage />} />
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

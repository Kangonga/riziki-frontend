import {Routes, Route} from "react-router-dom"
import Employers from "./components/employerComponents/Employers";
import LandingPage from "./components/landingPage";
import AddJob from "./components//employerComponents/AddJob"
import EmployerProfile from "./components/employerComponents/EmployerProfile";
import EmployerJobs from "./components//employerComponents/EmployerJobs";
import Cards from "./components/Cards";
import './employers.css'
import UserList from "./components/employerComponents/UserList";
import { useState } from "react";
import { createContext } from "react";
import Login from "./components/Login";
import UserProfile from "./components/userComponents/UserProfile";
import SignUpForm from "./components/userComponents/SignUpForm";
import Jobs from "./components/jobs";
// import {UserContext} from "./UserContext";
// import {useContext} from "react"

export const UserContext = createContext(null)

function App() {
  const [user,setUser] = useState({})
  return (
  <>
  <UserContext.Provider value={{
    user,setUser
  }}>

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
     <Route path="test" element={<FlavorForm />} />
     <Route path="/jobs" element={<Jobs />} />
     {/* <Route path="/list" element={<NonAdmins />} /> */}
    </Routes>   
  </UserContext.Provider>
    
    </>
   
  );
}
function FlavorForm() {
  const [value, setValue] = useState(["initial"]);

  function handleChange(event) {
    let selected = [...event.target.selectedOptions].map(option =>option.value);
    console.log("before")
    setValue(()=>selected);
    console.log(value)
    console.log("after");
    // console.log(event.target.selectedOptions[0].value);
  }
  function handleSubmit(event) {
    alert('Your favorite flavor is: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select multiple={true} value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
      {value}
    </form>
  );
}
export default App;

import React, {useState} from 'react';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm';
import { UserContext } from './components/UserContext';
const App = () => {
  const [me,setMe] = useState({})
  const [currentForm, setCurrentForm] = useState("login")
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <>
    <UserContext.Provider value={{me, setMe}}>
      <div className='App'>
        {currentForm === "login" ?   <Login formSwitch={toggleForm}/>: <SignUpForm formSwitch={toggleForm}/>}
      </div>
    </UserContext.Provider>
  
    </>
    
  )
}

export default App;

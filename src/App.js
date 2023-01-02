import React, {useState} from 'react';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm';
const App = () => {
  const [currentForm, setCurrentForm] = useState("login")
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <>
    <div className='App'>
      {currentForm === "login" ?   <Login formSwitch={toggleForm}/>: <SignUpForm formSwitch={toggleForm}/>}

    </div>
  
    </>
    
  )
}

export default App;

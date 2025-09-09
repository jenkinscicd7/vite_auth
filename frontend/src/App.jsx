import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import VerificationNotification from './components/VerificationNotification';
import Default from './components/Default'
import EmailVerified from './components/EmailVerified'
import VerifyEmail from './components/VerifyEmail'
import CurrentEmployment from './components/CurrentEmployment'
import New from './components/New'



function App() {

  return ( 
     <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Default />} />
       <Route path="/home" element={<HomePage />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/verify-notification" element={<VerificationNotification />} />
       <Route path="/email-verified" element={<EmailVerified />}/>
       <Route path="/signup/email-verification/verify" element={<VerifyEmail />}/>
       <Route path="/employee" element={<CurrentEmployment />}/>
        <Route path="/employeeDetails" element={<New />}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App


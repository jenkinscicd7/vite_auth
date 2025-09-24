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
import VerifyEmail from './components/VerifyEmail'
import CurrentEmployment from './components/CurrentEmployment'
import CurrentEmployment1 from './components/CurrentEmployment1'
import Form from './components/Form'
import ForgotPassword from './components/ForgotPassword'
import EnterOTP from './components/EnterOTP'
import ResetPassword from './components/ResetPassword'



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
       <Route path="/signup/email-verification/verify" element={<VerifyEmail />}/>
       <Route path="/employee" element={<CurrentEmployment />}/>
       <Route path="/employeeDetails" element={<CurrentEmployment1 />}/>
       <Route path="/newemployeedetails" element={<Form />}/>
       <Route path="/forgot-password" element={<ForgotPassword />}/>
       <Route path="/enter-otp" element={<EnterOTP/>}/>
        <Route path="/reset-password" element={<ResetPassword />}/>




     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App


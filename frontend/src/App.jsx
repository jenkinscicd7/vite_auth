import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import VerificationNotification from './components/VerificationNotification';


function App() {

  return ( 
     <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/verify-notification" element={<VerificationNotification />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

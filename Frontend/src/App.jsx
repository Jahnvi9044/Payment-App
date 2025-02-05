import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashbaord'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Send from './Pages/Send'
import TransferStatus from './Pages/TransferStatus'
import './App.css'
import { Suspense } from 'react'
import About from './Components/HomeElements/About'
import ContactUs from './Components/HomeElements/ContactUs'
import Service from './Components/HomeElements/Service'
import NavBar from './Components/NavBar'
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      
      <Route path="/" element={<Home/>}>Signin</Route>
      <Route path="/signin" element={<SignIn/>}>Signin</Route>
      <Route path="/signup" element={<SignUp/>}>Signup</Route>
      <Route path="/dashboard" element={<Dashboard/>}>Dashboard</Route>
      <Route path="/send" element={<Send/>}>Send</Route>
      


      <Route path="/transferStatus" element={<Suspense fallback={"...Loading"}><TransferStatus/></Suspense>}>Send</Route>
     


      <Route path="/about" element={<><NavBar/><About/></>}>About</Route>
      <Route path="/contact" element={<><NavBar></NavBar><ContactUs/></>}>Contact</Route>
      <Route path="/service" element={<><NavBar></NavBar><Service/></>}>Services</Route>

      <Route path="*" element={<NotFound/>}>NotFound</Route>



       
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import AppBar from '../Components/AppBar'
import Balance from '../Components/Balance'
import User from '../Components/User'
import { useLocation } from 'react-router-dom'

const Dashbaord = () => {

   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);


   //Extract Queries 
   const username = searchParams.get("username");
   const name = searchParams.get("name");
    
   
   console.log(username+" "+name)

  return (
    <div>
        <AppBar name ={name} username={username} ></AppBar>
        <div className="m-4 sm:mx-8">
            <Balance/>
            <User/>
        </div>
    </div>
  )
}

export default Dashbaord
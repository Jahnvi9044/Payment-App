import React from 'react'
import Heading from '../Components/Heading'
import InputBox from '../Components/InputBox'
import SubHeading from '../Components/SubHeading'
import Button from '../Components/Button'
import ButtonWarning from '../Components/ButtonWarring'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setUserName] = useState("");
    const [password,setpassword] = useState("");
  
    const navigate = useNavigate();
    
    const name = firstName+" "+lastName;
    return (
    <div className="w-full h-screen flex justify-center ">
    <div className=' w-full md:w-[60%] h-auto bg-blue-200  p-4 sm:p-10 m-auto rounded-sm flex justify-center ' >
      <div className='w-[300px] sm:w-[350px]  bg-white rounded-md p-3 sm:p-5 flex flex-col items-center '>
            <Heading heading={"SignIn"}></Heading>
            <SubHeading subheading={"Enter your credidentials to login to your account"}></SubHeading>
            <InputBox onChange={(e)=>{setFirstName(e.target.value)}} label={"FirstName"} placeholder={"John"}></InputBox>
            <InputBox onChange={(e)=>{setLastName(e.target.value)}} label={"LastName"} placeholder={"John"}></InputBox>
            <InputBox onChange={(e)=>{setUserName(e.target.value)}} label={"Username"} placeholder={"johnmick123"}></InputBox>
            <InputBox onChange={(e)=>{setpassword(e.target.value)}} label={"Password"} placeholder={""}></InputBox>
            <Button onClick={async ()=>{
         
             const response = await  axios.post('http://localhost:3000/payment/vi/user/signin',{
                    username,
                    password
                })
                
                console.log(response)
                console.log(response.status)

                localStorage.setItem("token",response.data.token);
                if(response.status===201)
                {
                    navigate(`/dashboard?username=${username}&name=${name}`)
                }
            }}
         
            button={"Submit"}></Button>
            <ButtonWarning to={'/signup'} button={"Do not have account ? SignUp "}></ButtonWarning>
          </div>
        </div>
    </div>
  )
}

export default SignIn
import React from 'react'
import Heading from '../Components/Heading'
import InputBox from '../Components/InputBox'
import SubHeading from '../Components/SubHeading'
import Button from '../Components/Button'
import ButtonWarning from '../Components/ButtonWarring'
import { useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 

const SignUp = () => {

   const [firstName,setFirstName] = useState("");
   const [lastName,setLastName] = useState("");
   const [username,setUserName] = useState("");
   const [password,setpassword] = useState("");
   const [confirmPassword,setconPassword] = useState("");
   const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center ">
    <div className=' w-full md:w-[60%] h-auto bg-blue-200  p-4 sm:p-10 m-auto rounded-sm flex justify-center ' >
      <div className='w-[300px] sm:w-[350px]  bg-white rounded-md p-3 sm:p-5 flex flex-col items-center '>
        <Heading heading={"SignUp"}></Heading>
        <SubHeading subheading={"Enter your credidentials to create an account"}></SubHeading>
        <InputBox onChange={(e)=>{setFirstName(e.target.value)}} label={"FirstName"} placeholder={"John"}></InputBox>
        <InputBox onChange={(e)=>{setLastName(e.target.value)}} label={"LastName"} placeholder={"John"}></InputBox>
        <InputBox onChange={(e)=>{setUserName(e.target.value)}} label={"Username"} placeholder={"johnmick123"}></InputBox>
        <InputBox onChange={(e)=>{setpassword(e.target.value)}} label={"Password"} placeholder={""}></InputBox>
        <InputBox onChange={(e)=>{setconPassword(e.target.value)}} label={"Confirm-Password"} placeholder={""}></InputBox>
        <Button  onClick={async ()=>{
         try{
        const response= await axios.post('http://localhost:3000/payment/vi/user/signup',{
                username,
                password,
                lastName,
                firstName,
                confirmPassword
            });

            
           if(response.status===201)
            {  
              console.log(response);
              localStorage.setItem("token",response.data.token) ;
               alert("Account Created Successfully")
                navigate(`/dashboard?username=${username}&name=${name}`)
            }
          }
            catch(e)
            { 
              if (error.response) {
              switch (error.response.status) {
                case 409:
                  alert(error.response.data.msg);
                  break;
                case 411:
                  alert(error.response.data.msg);
                  break;
                case 500:
                  alert('Internal server error. Please try again later.');
                  break;
                default:
                  alert('An unexpected error occurred.');
                  break;
              }
            } else if (error.request) {
              // Request was made but no response was received
              alert('Network error. Please check your connection.');
            } else {
              // Something else happened
              alert('An unexpected error occurred.');
            }
            }
        }}
         prop={'/signin'}  button={"Submit"}></Button>
        
        <ButtonWarning to={'/signin'} button={"Already have an account? SignIn "} ></ButtonWarning>
        {console.log(firstName+" "+lastName+" "+username+" "+password+" ")}
        {/* <button onClick={handle}>click</button> */}
      </div>
    </div>
</div>
  )
}

export default SignUp
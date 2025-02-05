import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Heading from '../Components/Heading';
import InputBox from '../Components/InputBox';
import SubHeading from '../Components/SubHeading';
import Button from '../Components/Button';
import ButtonWarning from '../Components/ButtonWarring';

const SignIn = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  const signIpUrl = `${apiUrl}/payment/vi/user/signin`;




  const name = `${firstName} ${lastName}`;

  const handleSignIn = async () => {
    try {
      const response = await axios.post(signIpUrl, {
        username,
        password,
      });
        console.log(response);
      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        alert('Signed in Successfully');
        navigate(`/dashboard?username=${username}&name=${name}`);
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status outside 2xx
        switch (error.response.status) {
          case 409:
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
  };

  return (
    <div className="relative w-full h-screen flex justify-center">
      <div className="w-full md:w-[60%] h-auto bg-blue-200 p-4 sm:p-10 m-auto rounded-sm flex justify-center">
        <div className="w-[300px] sm:w-[350px] bg-white rounded-md p-3 sm:p-5 flex flex-col items-center">
          <Heading heading="SignIn" />
          <SubHeading subheading="Enter your credentials to login to your account" />
          <InputBox onChange={(e) => setFirstName(e.target.value)} label="FirstName" placeholder="John" />
          <InputBox onChange={(e) => setLastName(e.target.value)} label="LastName" placeholder="Doe" />
          <InputBox onChange={(e) => setUserName(e.target.value)} label="Username" placeholder="johnmick123" />
          <InputBox onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="********" />
          <Button onClick={handleSignIn} button="Submit" />
          <ButtonWarning to="/signup" button="Do not have an account? Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

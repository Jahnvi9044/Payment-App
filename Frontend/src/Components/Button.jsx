import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Button = ({onClick,disabled,button}) => {
      
  


  return (
        
        <button onClick={onClick} disabled={disabled} type="button" className=" w-full m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-sky-950 disabled:cursor-not-allowed disabled:text-white">{button}</button>
    
  )
}

export default Button
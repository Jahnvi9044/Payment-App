import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonWarring = ({button,to}) => {
  return (
    <NavLink to={to} type="button" className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-center text-gray-900 
    focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
    focus:z-10 focus:ring-4 focus:ring-gray-100">
    {button}
    </NavLink>
  )
}

export default ButtonWarring
import React from 'react'
import {NavLink} from 'react-router-dom'
function AppBar({name,username}){
    return (
        <div className="shadow h-14 flex justify-between">
            <NavLink className="flex flex-col justify-center h-full ml-7 font-semibold " to={'/'}  >
                Payment App
            </NavLink>
            <div className="flex">
               <div className="flex flex-col justify-center h-full mr-4 font-semibold">
                  {name}
                </div>
               <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-5 m-1 "> 
                  <div className="flex flex-col justify-center h-full  ">
                    {name.substr(0,1)}
                  </div>
                </div>
            </div>
        </div>
    )
}

export default AppBar 
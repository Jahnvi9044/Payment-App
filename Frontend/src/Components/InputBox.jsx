import React from 'react'

const InputBox = ({onChange,label,placeholder}) => {
  return (
    <div className="m-1.5 w-full">
    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input onChange={onChange} type="text" id="first_name" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2 " placeholder={placeholder} required />
    
{/*     
    <label className="mb-1 text-sm font-medium text-gray-900">Hello</label>
    <input type="text" className='w-full bg-gray-50 border block rounded-lg p-2 border-gray-300 text-sm' placeholder='Hello EveryOne' /> */}
    </div> 
  )
}

export default InputBox
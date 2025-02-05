
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   
<footer className="w-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
               
                <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                    <li ><NavLink to="/"  className="text-white hover:text-gray-400">PaymentApp</NavLink ></li>
                    <li className="sm:my-0 my-2" ><NavLink to="/service"  className="text-white hover:text-gray-400">Products</NavLink></li>
                    <li ><NavLink to="/about"  className="text-white hover:text-gray-400">Resources</NavLink></li>
                    <li  className="sm:my-0 my-2"><a href="#"  className="text-white hover:text-gray-400">Blog</a></li>
                    <li ><NavLink to="/contact"  className="text-white hover:text-gray-400">Support</NavLink></li>
                </ul>
                <div className="flex  space-x-4 sm:justify-center  ">
                    <a href="#"  className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
                        </svg>
                            
                    </a>
                    <a href="https://github.com/Jahnvi9044"  className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
                    <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.3 3.438 9.8 8.207 11.4.6.1.82-.3.82-.6v-2.3c-3.338.7-4.4-1.5-4.4-1.5-.6-1.5-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.1.1 1.8 1.2 1.8 1.2 1.6 2.7 4.3 2 5.3 1.5.1-.9.6-1.8 1.1-2.2-2.7-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.4-3.1-.1-.3-.6-1.6.1-3.4 0 0 1.1-.3 3.5 1.3 1-.3 2-.3 3-.3 1 .1 2 .2 2.9.3 2.5-1.6 3.5-1.3 3.5-1.3.7 1.8.2 3.1.1 3.4.9.8 1.4 1.8 1.4 3.1 0 4.6-2.8 5.5-5.5 5.8.6.5 1.1 1.3 1.1 2.4v3.4c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" fill="currentColor"/>
                    </svg>
                            
                    </a>
                    <a href="https://www.linkedin.com/in/jahnvi-chaurasia-b681b3213/"  className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
                        <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor"/>
                            </svg>
                            
                    </a>
                    <a href="https://www.youtube.com/@jahnvichaurasia9531"  className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600">
                        <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor"/>
                            </svg>
                            
                    </a>
                </div>
            </div>
            
            <div className="py-7 border-t border-gray-700">
                <div className="flex items-center justify-center">
                    <span className="text-gray-400 ">© 2025, All rights reserved. Created by <a href="https://www.linkedin.com/in/jahnvi-chaurasia-b681b3213/">Jahnvi Chaurasia</a></span>
                </div>
            </div>
        </div>
    </footer>
 
)
}

export default Footer
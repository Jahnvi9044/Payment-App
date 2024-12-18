import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(""); // Mock username
  const [name,setName] =useState(""); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu toggle
  const navigate = useNavigate();
  let token;
  // Check for the token in localStorage on component mount
  useEffect(() => {
     token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      try{
         axios.get('http://localhost:3000/payment/vi/user/info',{
          headers:
          {
            Authorization:`Bearer ${token}`
          }
        }).then(response=>{
            setName(response.data.firstName+" "+response.data.LastName)
            setUsername(response.data.username);
        })
      }
      catch(e)
      {
        console.log("Error"+e);
      }
    }
  }, [isAuthenticated]);

  const handleGetStarted = () => {
    // Navigate to the Sign-In page
    navigate("/signin");
  };

  const handleLogout = () => {
    // Clear the token and username from localStorage
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUsername("");
  };

  const handleMenuToggle = () => {
    // Toggle the menu's open state
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Title */}
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div
            className="h-14 flex flex-col justify-center font-bold text-2xl text-blue-800"
            alt="Payment App"
          >
            Payment App
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </NavLink>

        {/* Buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!isAuthenticated ? (
            <button
              type="button"
              onClick={handleGetStarted}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-md font-medium text-gray-900 dark:text-white">
                Welcome, {username}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-600 font-semibold dark:text-gray-400 dark:hover:text-red-400"
              >
                Logout
              </button>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={handleMenuToggle} // Add onClick handler
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen} // Bind state
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
            {isAuthenticated ?<NavLink
                to={`/dashboard?username=${username}&name=${name}`}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Dashboard
              </NavLink>:
              ""}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

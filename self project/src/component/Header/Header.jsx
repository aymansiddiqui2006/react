import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  return (
    <header className='w-full bg-blue-950 px-12'>
      <div className=" py-3 flex gap-20 items-center">

        <Link to='/'>
          <div>
            <div className='text-white text-2xl font-serif font-bold'>LOGO</div>
          </div>
        </Link>

        <div >
          
          <input type="text" placeholder='Search' 
          className='border-2 border-black rounded-2xl p-1.5 bg-gray-300 text-black '/>
          <img src='../search' alt="not" className='h-10 w-10'/>
        </div>


        <div>
          {/* <---bars---> */}
          <ul className='ml-auto flex justify-center gap-10 font-medium '>

            <li><NavLink to='/home'
              className={({ isActive }) => `transition-colors duration-200  text-white  ${isActive ? "text-gray-300" : "text-white"}  hover:text-gray-200`}
            >
              Home
            </NavLink>
            </li>

            <li>
              <NavLink to='/Message'
                className={({ isActive }) => ` transition-colors duration-200 ${isActive ? "text-gray-300" : "text-white"} hover:text-gray-200`}>
                Message
              </NavLink>
            </li>

            <li>
              <NavLink to='/Notification'
                className={({ isActive }) => `transition-colors duration-200  ${isActive ? "text-gray-300" : "text-white"} hover:text-gray-200`}>
                Notification
              </NavLink>
            </li>

            <li>
              <NavLink to='/Profile'
                className={({ isActive }) => ` transition-colors duration-200 ${isActive ? "text-gray-300" : "text-white"} hover:text-gray-200`}>
                Profile
              </NavLink>
            </li>

          </ul>







        </div>
      </div >
    </header>
  )
}

export default Header
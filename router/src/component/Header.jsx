import React from "react";
import { Link, NavLink } from 'react-router-dom';
//link tag is use to link the pages 
//why we do not use <a></a> ?
//because a tag in html reloads the page but the link the refesh the specific part

function Header() {
    return (
        <>
            <header className="sticky shadow  top-0 ">
                <nav>
                    <div className='bg-white h-20 shadow p-10 flex justify-around items-center'>

                        <div>
                            <Link to='/' className="flex items-center">
                                <div>
                                    <span className='text-gray-700 text-[35px] font-bold'>your</span>
                                    <span className='text-orange-700  font-bold text-[35px]'>logo</span>
                                </div>
                            </Link>
                        </div>

                        <div className="flex-1 flex justify-center">

                            <ul className="flex flex-col mt-4 font-medium text-[20px] lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink to='/'
                                        className={({ isActive }) =>/*isActive is use to check weither use are on the page or not*/
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/About'
                                        className={({ isActive }) =>/*isActive is use to check weither use are on the page or not*/
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Contact'
                                        className={({ isActive }) =>/*isActive is use to check weither use are on the page or not*/
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Github'
                                        className={({ isActive }) =>/*isActive is use to check weither use are on the page or not*/
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Github
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <Link to='#' className=' items-center gap-6 font-medium text-[20px] cursor-pointer'>
                                log in
                            </Link>
                            <Link to='#' className=' flex justify-center font-semibold text-[20px] bg-orange-600 p-1.5 text-white w-28 rounded-md shadow-md hover:scale-95 cursor-pointer'>
                                sign in
                            </Link>
                        </div>

                    </div>
                </nav></header >

        </>
    )
}

export default Header
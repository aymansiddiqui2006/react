import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const activeClass = ({ isActive }) =>
    `px-4 py-2 rounded transition-all duration-300 ${isActive ? 'text-amber-200' : 'text-white'}`;

  return (
    <div className='bg-red-900 h-32 w-full flex items-center justify-center'>
      <ul className='flex gap-14 font-sans text-lg'>
        <NavLink to='/home' className={activeClass}>Home</NavLink>
        <NavLink to='/favorites' className={activeClass}>Favorities</NavLink>
        <NavLink to='/about' className={activeClass}>About</NavLink>
      </ul>
    </div>
  );
}

export default NavBar;

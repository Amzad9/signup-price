import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="w-full mx-auto px-8 py-4 sm:flex sm:items-center sm:justify-between dark:bg-white">
      <a href="#">Logo</a>
      <div className='flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:pl-5 sm:pb-0 sm:overflow-x-visible'>
         <Link className="font-medium text-blue-500" to="/user" aria-current="page">User List</Link>
         <Link className="font-medium text-blue-500" to="/" aria-current="page">Price</Link>
         <Link className="font-medium text-blue-500" to="/register" aria-current="page">Register</Link>
      </div>
    </nav>
  )
}

export default Nav
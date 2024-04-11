import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer>
    <ul className='bg-gray-900 mt-[1rem] p-[6rem] lg:px-10'>
        <div className='text-center lg:flex gap-5 text-white justify-center'>
                <li className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Education">Education</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Business">Business</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Entertainment">Entertainment</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Science">Science</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Arts">Arts</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Technology">Technology</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Sport">Sport</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/General">General</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
                <li  className='bg-white p-1 m-2 rounded-md text-gray-900 font-bold hover:bg-orange-600 hover:text-white lg:px-4'><Link to="/posts/categories/Finaical">Finaical</Link></li>
        </div>
    </ul>
            <hr />
    <div className='bg-gray-900 p-[1rem] text-center'>
        <small className='text-white'>
            All Right Reserved &copy; Copyright, BOUSTI.
        </small>
    </div>
   </footer>
  )
}

export default Footer

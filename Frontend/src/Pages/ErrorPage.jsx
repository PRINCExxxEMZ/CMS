import React from 'react'
import error from '../assets/error.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className=''>
        <div className='text-center block w-[100%] m-auto pt-[5rem] mb-10 '>
          <img className='h-screen grid grid-cols-1 items-center m-auto' src={error} alt="" />
            <Link to='/landingpage' className='px-7 py-3  bg-purple-500 text-white font-bold rounded-md'>Go back home</Link>
        </div>
    </section>
  )
}

export default ErrorPage

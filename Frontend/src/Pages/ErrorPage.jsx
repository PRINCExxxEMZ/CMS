import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='bg-purple-200'>
        <div className='center: text-center block w-[100%] m-auto pt-[5rem]'>
            <Link to='/' className='px-7 py-3 bg-purple-500 text-white rounded-md'>Go back home</Link>
            <h2>Page Not Found</h2>
        </div>
    </section>
  )
}

export default ErrorPage

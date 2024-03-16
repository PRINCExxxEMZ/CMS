import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
})

const changeInputHandler = (e) => {
    setUserData(prevState => {
        return {...prevState, [e.target.name] : e.target.value}
    })
}
  return (
    <section>
        <div className='flex justify-center items-center h-screen overflow-hidden'>
            <form action=""  className='w-[100%] px-10 md:mx-[200px] lg:mx-[200px] xl:mx-[200px]'>
                <label className='text-[25px]'> Sign In</label>
                <h3 className='bg-red-500 text-white text-[15px] rounded-[5px] w-[100%] px-2 p-1 mt-3'>Sign In Error</h3>

                <input type="email" className='w-[100%] bg-gray-100 mt-5 px-2 p-1' placeholder='Email Address' name='email'
                value={userData.email}
                onChange={changeInputHandler} autoFocus required/> <br />

                <input type="password"  className='w-[100%] bg-gray-100 mt-5 px-2 p-1' placeholder='Password' name='password'
                value={userData.password}
                onChange={changeInputHandler} required/> <br />

                <button type='submit'  className='px-7 rounded-md mt-5 py-2 bg-purple-400 text-white'>Login</button>

               <div className='flex gap-2 items-center text-center mt-10'>
               <h3 className='text-[15px]'>Don't have an account</h3><Link className='text-[14px] text-purple-500' t0="/register">Sign Up</Link>
               </div>
            </form>
        </div>
    </section>
  )
}

export default LoginPage

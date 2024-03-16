import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const RegisterPage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    department: '',
    password: '',
    confirmPassword: ''
})

const changeInputHandler = (e) => {
  setUserData(prevState => {
      return {...prevState, [e.target.name] : e.target.value}
  })
}

  return (
    <section>
        <div className='flex justify-center items-center h-screen overflow-hidden'>
            <form action="" className='w-[100%] px-10 md:mx-[200px] lg:mx-[200px] xl:mx-[200px]'>
                <label className='text-[25px]'> Sign Up</label>
                <h3 className='bg-red-500 text-white text-[15px] rounded-[5px] w-[100%] px-2 p-1 mt-3'>Sign up Error</h3>

                <input type="name" className='w-[100%] bg-gray-100 mt-5 px-2 p-1 ' placeholder='Full Name' name='name'
                 value={userData.name}
                 onChange={changeInputHandler} autoFocus required/> <br />

                <input type="department" className='w-[100%] bg-gray-100 mt-5 px-2 p-1' placeholder='Department' name='Department'
                value={userData.department}
                onChange={changeInputHandler} required/> <br />

                <input type="email" className='w-[100%] bg-gray-100 mt-5 px-2 p-1' placeholder='Email Address' name='email'
                value={userData.email}
                onChange={changeInputHandler} required/> <br />

                <input type="password"  className='w-[100%] bg-gray-100 mt-5 px-2 p-1' placeholder='Password' name='password'
                value={userData.password}
                onChange={changeInputHandler} required/> <br />

                <input type="confirmpassword"  className='w-[100%] bg-gray-100 mt-5 px-2 p-1' placeholder='Confrim Password'
                value={userData.confirmPassword}
                onChange={changeInputHandler} name='confirmpassword' required/> <br />

                <button type='submit'  className='px-7 rounded-md mt-5 py-2 bg-purple-400 text-white'>Register</button>

                <div className='flex gap-2 items-center text-center mt-10'>
               <h3 className='text-[15px]'>Already have an account</h3> <Link className='text-[14px] text-purple-500' t0="/login">Sign In</Link>
               </div>
            </form>
        </div>
    </section>
  )
}

export default RegisterPage

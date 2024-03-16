import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avater from '../assets/avater-3.png'
import {FaEdit} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'


const UserProfile = () => {
  const [avater, setAvater] = useState(Avater)
  const [name, setName] = useState(Avater)
  const [email, setEmail] = useState(Avater)
  const [currentPassword, setCurrentPassword] = useState(Avater)
  const [newPassword, setNewpassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  return (
    <section className='profile'>
        <div className='items-center text-center'>
              <Link to={`/myposts/10`} className='px-4 py-2 bg-slate-800 text-white'>My posts</Link>

          <div className='w-[100%]'>
              <div className='avater_wrapper w-[13rem] relative mt-[1rem] m-auto'>
                <div className='profile_avater h-[100%] rounded-full border-white border overflow-hidden'>
                  <img src={avater} alt="" />
                </div>
              
              <form className='h-[1rem]'>
                  <input type="file" className='hidden' name='avater' id='avater' onChange={ e=> setAvater (e.target.files[0])} accept='jpg, png, jpeg'/>
                  <label htmlFor="avater"><FaEdit/></label>
              </form>
              <button className='profile_avater-btn'> <FaCheck/> </button>
            </div>

            <h1>Ark</h1>

            <form className='w-[100%] px-10 md:mx-[200px] lg:mx-[200px] xl:mx-[200px]'>
              <p className='bg-red-500 text-white text-[15px] rounded-[5px] w-[100%] px-2 p-1 mt-3'> Input Error</p>
              <input type="text" className='w-[100%] bg-gray-100 mt-5 px-2 p-1 ' placeholder='Full Name' value={name} onChange={ e=> setName(e.target.value)} autoFocus required/>
              <input type="email" className='w-[100%] bg-gray-100 mt-5 px-2 p-1 ' placeholder='Email' value={email} onChange={ e=> setEmail(e.target.value)} required/>
              <input type="password" className='w-[100%] bg-gray-100 mt-5 px-2 p-1 ' placeholder='Current Password' value={currentPassword} onChange={e=> setCurrentPassword(e.target.value)}/>
              <input type="password" className='w-[100%] bg-gray-100 mt-5 px-2 p-1 ' placeholder='New Password' value={newPassword} onChange={e=> setNewpassword(e.target.value)} required/>
              <input type="password" className='w-[100%] bg-gray-100 mt-5 px-2 p-1 ' placeholder='Comfirm New Password' value={confirmNewPassword} onChange={e=> setConfirmNewPassword(e.target.value)} required/>
              <button type='submit' className='px-4 py-2 bg-purple-500 text-white'>Update</button>
            </form>
          </div>
       </div>
    </section>
  )
}

export default UserProfile

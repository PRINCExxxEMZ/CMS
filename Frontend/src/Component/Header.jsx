import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import {MdCancel} from "react-icons/md";

const Header = () => {
  const [Nav,setNav] =useState(true);

  const handleNav = () => {
    setNav(!Nav);
  };

  return (
     <div className='item-center flex justify-between h-[60px] border-b-2 mx-10 px-10'>
      <h1 className='text-white text-3xl font-bold w-full'>Ark</h1>
      <div className='hidden lg:flex gap-x-4'>
        <Link>Home</Link>
        <Link>Skills</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Chats</Link>
      </div>
    <div onClick={handleNav} className='p-4 flex lg:hidden'>
     {!Nav ? <AiOutlineMenu size={20}/> : <MdCancel size={20}/>}
    </div>
    <div className={
      Nav
      ?'lg:hidden fixed flex-col right-0 top-0 h-screen w-[30%] flex items-center mt-16'   
      :'hidden fixed right-[-100%]'
      }>
                <li><Link className='list-none gap-x-3' t0="/profile" onClick={closeNavHandler}>Ark</Link></li>
                <li><Link  className='list-none gap-x-3' t0="/create" onClick={closeNavHandler}>Create Post</Link></li>
                <li><Link  className='list-none gap-x-3' t0="/author" onClick={closeNavHandler}>Authors</Link></li>
                <li><Link  className='list-none gap-x-3' t0="/logout" onClick={closeNavHandler}>Logout</Link></li>
       </div>
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import Avater from '../assets/avater-3.png'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/10`} className='flex gap-[1rem] mt-5'>
        <div className='w-[2.5rem] aspect-auto rounded-md overflow-hidden'>
            <img src={Avater} alt="" />
        </div>

        <div className='gap-1 align-text-top'>
            <h5>By: Domi</h5>
            <small>just now</small>
        </div>
    </Link>
  )
}

export default PostAuthor

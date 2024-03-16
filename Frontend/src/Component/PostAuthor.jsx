import React from 'react'
import { Link } from 'react-router-dom'
import Avater from '../assets/avater-3.png'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/10`} className=''>
        <div className=''>
            <img src={Avater} alt="" />
        </div>

        <div className=''>
            <h5>By: Domi</h5>
            <small>just now</small>
        </div>
    </Link>
  )
}

export default PostAuthor

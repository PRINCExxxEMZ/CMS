import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer>
    <ul className=''>
        <li><Link to="/posts/categories/Education">Education</Link></li>
        <li><Link to="/posts/categories/Business">Business</Link></li>
        <li><Link to="/posts/categories/Entertainment">Entertainment</Link></li>
        <li><Link to="/posts/categories/Science">Science</Link></li>
        <li><Link to="/posts/categories/Arts">Arts</Link></li>
        <li><Link to="/posts/categories/Technology">Technology</Link></li>
        <li><Link to="/posts/categories/Sport">Sport</Link></li>
        <li><Link to="/posts/categories/General">General</Link></li>
        <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
        <li><Link to="/posts/categories/Finaical">Finaical</Link></li>
    </ul>
    <div className=''>
        <small>
            All Right Reserved &copy; Copyright, BOUSTI.
        </small>
    </div>
   </footer>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItems = ({postID, category, title, description, authorID, thumbnail}) => {
    const shortDescription = description.length > 90 ? description.substr(0, 90) + '...' : description; 
    const postTitle = title.length > 30 ? title.substr(0, 30) + '...' : title; 
  return (
    <article className=''>
        <div className=''>
            <img src={thumbnail} alt="title" />
        </div>
        <div className=''>
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
                 <p>{shortDescription}</p>

            <div className=''>
                <PostAuthor/>
                <Link to={`/posts/categories/${category}`} className=''>{category}</Link>
            </div>

        </div>
    </article>
  )
}

export default PostItems

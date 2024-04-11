import React, {useState} from 'react'
import PostItems from './PostItems'
import { DUMMY_POSTS } from '../data'


const Posts = () => {
    const [posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='mx-10 '>
       {posts.length > 0 ? <div className='grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-[4rem]'>
            {
                posts.map(({id, thumbnail, category, title, desc, authorID})=> 
                <PostItems key={id} PostID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
            }
        </div> : <h3 className='text-center mx-auto'>No Posts Found</h3>}
    </section>
  )
}

export default Posts

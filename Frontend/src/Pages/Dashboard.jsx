import React, { useState } from 'react'
import {DUMMY_POSTS} from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className=''>
        {
            posts.length ? <div className=''>
                {
                    posts.map (post =>{
                        return <article key={post.id} className=''>
                            <div className=''>
                                <div className=''>
                                    <img src={post.thumbnail} alt="" />
                                </div>
                                <h5>{post.title}</h5>
                            </div>  
                            <div className=''>
                                <Link to={`/posts/${post.id}`} className=''> View</Link>
                                <Link to={`/posts/${post.id}/edit`} className=''> Edit</Link>
                                <Link to={`/posts/${post.id}/delete`} className=''> Delete</Link>
                            </div>
                        </article>
                    })
                }
            </div> : <h2 className=''>You have no Post.</h2>
        }
    </section>
  )
}

export default Dashboard

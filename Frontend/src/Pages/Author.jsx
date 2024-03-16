import React, { useState } from 'react'

import avater1 from '../assets/avater.jpg'
import avater2 from '../assets/Avater-2.jpg'
import avater3 from '../assets/avater-3.png'
import { Link } from 'react-router-dom'

const authorsData = [
    {id: 1, avater: avater1, name:'Dark Prince', posts: 5},
    {id: 2, avater: avater2, name:'Ark', posts: 1},
    {id: 3, avater: avater3, name:'Doc', posts: 2},
]

const Author = () => {
    const [authors, setAuthors] = useState(authorsData)
  return (
        <section className=''>
            {authors.length > 0 ? <div className=''>
                {
                    authors.map(({id, avater, name, posts}) => {
                        return <Link key={id}to ={`/posts/users/${id}`} className=''>
                            <div className=''>
                                <img src={avater} alt={`image of ${name}`} />
                            </div>
                            <div className=''>
                                <h4>{name}</h4>
                                <p>{posts}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2 className=''>No Authors Found</h2>}
        </section>
    
  )
}

export default Author

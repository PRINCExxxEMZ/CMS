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
        <section className='bg-white mx-10'>
            {authors.length > 0 ? <div className='grid grid-cols-2 gap-x-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    authors.map(({id, avater, name, posts}) => {
                        return <Link key={id}to ={`/posts/users/${id}`} className='flex gap-2 mb-5 mt-5 bg-gray-100 border-gray-400 border-2 rounded-xl p-2 hover:shadow-lg'>
                            <div className='w-[5rem] h-[5rem] rounded-full overflow-hidden border-orange-400 border-4 aspect-w-1 aspect-h-1'>
                                <img src={avater} alt={`image of ${name}`} />
                            </div>
                            <div className='mt-[1rem] font-semibold'>
                                <h4>{name}</h4>
                                <p>{posts}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2 className='items-center text-center'>No Authors Found</h2>}
        </section>
    
  )
}

export default Author

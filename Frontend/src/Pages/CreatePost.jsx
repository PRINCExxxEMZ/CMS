import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Uncategorized')
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    

    const modules        = {
        toolbar: [
            [{'header' :[1, 2, 3, 4, 5, 6, false]}],
            ['bold','italic','underline','strike','blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'},{'indent':'-1'},{'indent':'+1'}],
            ['link','image'],
            ['clean']
        ],
    }

    const formats =[
        'header',
        'bold','italic','underline','strike','blockquote',
        'list','bullet','indent',
        'link','image'
    ]

    const POST_CATEGORIES =["Agriculture","Business","Art","Education","Entertainment","Scince","Technology","Sport","General","Finaical"]

  return (
    <section className='w-[80%] m-auto grid place-items-center h-[100vh]'>
        <div className=''>
            <h2 className='text-[25px] font-bold'>Create Post</h2>
            <p className='bg-red-500 text-white text-[15px] rounded-[5px] w-[100%] px-2 p-1 mt-3'> Post Error</p>
            <form className=''>
                <input className='w-[100%] bg-gray-100 mt-5 px-2 p-1' type="text" placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)} autoFocus required />
                <select className='w-[100%] bg-gray-100 mt-5 px-2 p-1 mb-5' name="category" value={category} onChange={e=> setCategory(e.target.value)}>\
                    {
                        POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
                    }
                </select>
                <ReactQuill className='h-[15rem] overflow-scroll mb-10' modules={modules} formats={formats} value ={description} onChange={setDescription}/>
                <input type="file" value={thumbnail} onChange={e=> setThumbnail(e.target.files[0])}  accept='jpg,png,jpeg'/>
                <button type='submit' className='px-1 rounded-md mt-5 py-1 bg-purple-400 text-white'>Create Post</button>
            </form>
        </div>
    </section>
  )
}

export default CreatePost

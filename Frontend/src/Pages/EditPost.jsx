import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditPost = () => {
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
    <section className='create-post'>
        <div className='container'>
            <h2>Edit Post</h2>
            <p className=''> Post Error</p>
            <form className=''>
                <input type="text" placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)} autoFocus required />
                <select name="category" value={category} onChange={e=> setCategory(e.target.value)}>\
                    {
                        POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
                    }
                </select>
                <ReactQuill modules={modules} formats={formats} value ={description} onChange={setDescription}/>
                <input type="file" value={thumbnail} onChange={e=> setThumbnail(e.target.files[0])}  accept='jpg,png,jpeg'/>
                <button type='submit' className=''> Update Post</button>
            </form>
        </div>
    </section>
  )
}

export default EditPost

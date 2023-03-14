import React from 'react'
import { useState } from 'react'

const CreateProject = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(content);
  }
  
    return (
    <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea  id='content' className='materialize-textarea' value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
  )
}

export default CreateProject
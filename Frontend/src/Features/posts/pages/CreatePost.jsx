import React, { useRef , useState } from 'react'
import "../style/createPost.scss"

const CreatePost = () => {

    const [caption, setCaption] = useState("")

    const postImageRef = useRef(null)

     function handleSubmit(e){
e.preventDefault()

const file =postImageRef.current.files[0]

     }

    
  return (
    <div className='create-post-page'>
        <h1>
            Create Post
        </h1>

        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <label id='post-image-label' htmlFor="postImage">Choose Image</label>
                <input ref={postImageRef} hidden type="file" name='postImage' id='postImage' />
                <input 
                value={(e)=>{setCaption(e.target.value)}}
                type="text" id='caption' name='caption' placeholder='Enter Caption' />
                <butto className ="button ">Create Post</butto>
            </form>
        </div>
    </div>
  )
}

export default CreatePost
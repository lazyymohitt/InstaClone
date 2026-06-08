import React from 'react'
import "../style/createPost.scss"

const CreatePost = () => {
  return (
    <div className='create-post-page'>
        <h1>
            Create Post
        </h1>

        <div className="form-container">
            <form>
            <label id='post-image-label' htmlFor="postImage">Choose Image</label>
                <input hidden type="file" name='postImage' id='postImage' />
                <input type="text" id='caption' name='caption' placeholder='Enter Caption' />
                <butto className ="button ">Create Post</butto>
            </form>
        </div>
    </div>
  )
}

export default CreatePost
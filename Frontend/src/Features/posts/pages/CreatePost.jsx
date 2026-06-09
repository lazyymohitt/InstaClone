import React, { useRef, useState } from "react";
import "../style/createPost.scss";
import { usePost } from "../hook/usePost";

import { useNavigate } from "react-router";

const CreatePost = () => {
  const [caption, setCaption] = useState("");

  const postImageRef = useRef(null);

  const { handleCreatePost, loading } = usePost();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const file = postImageRef.current.files[0];

    await handleCreatePost(file, caption);
    navigate("/")
  }

  if (loading) {
    return <main>Creating Post..</main>;
  }

  return (
    <div className="create-post-page">
      <h1>Create Post</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label id="post-image-label" htmlFor="postImage">
            Choose Image
          </label>
          <input
            ref={postImageRef}
            hidden
            type="file"
            name="postImage"
            id="postImage"
          />
          <input
            onInput={(e) => {
              setCaption(e.target.value);
            }}
            type="text"
            id="caption"
            name="caption"
            placeholder="Enter Caption"
          />
          <button className="button ">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

import React from 'react'
import "../style/feed.scss"
import Post from '../components/post'

const Feed = () => {
  return (
     <div className="feed">
        <div className="title">
            <h1>Your Posts</h1>
        </div>
        <div className="cards">
          {/* <Post/> */}
        </div>
    </div>
  )
}

export default Feed
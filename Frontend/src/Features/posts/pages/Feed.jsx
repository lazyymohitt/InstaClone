import React from 'react'
import "../style/feed.scss"
import Posts from '../components/posts'

const Feed = () => {
  return (
     <div className="feed">
        <div className="title">
            <h1>Your Posts</h1>
        </div>
        <div className="cards">
          <Posts/>
        </div>
    </div>
  )
}

export default Feed
import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/post'

import { usePost } from '../hook/usePost'

const Feed = () => {
  
  const {feed , handleGetFeed , loading } = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])

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
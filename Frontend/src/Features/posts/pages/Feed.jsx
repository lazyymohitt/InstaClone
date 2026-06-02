import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/post'

import { usePost } from '../hook/usePost'

const Feed = () => {
  
  const {feed , handleGetFeed , loading } = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])

  if(loading || !feed){
    return ( <main><h1>Feed is Loading</h1></main>)
  } 
  console.log(feed)
  return (
     <div className="feed">
        <div className="title">
            <h1>Your Posts</h1>
        </div>
        <div className="cards">
          {feed.map((post,index)=>{
            return <Post user={post.user}key={index} post={post} />
          })}
        </div>
    </div>
  )
}

export default Feed
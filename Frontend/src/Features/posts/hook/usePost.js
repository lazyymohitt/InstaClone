import { getFeed } from "../services/post.api";


import { useContext } from "react";
import {PostContext} from "../postContext"


export const usePost  = ()=>{

    const context = useContext(PostContext)

    const{loading,setLoading,setFeed ,feed , post, setPost} = context

    const handleGetFeed = async()=>{
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts)
        setLoading(false)
    }

    return{loading, feed , post , handleGetFeed}

}
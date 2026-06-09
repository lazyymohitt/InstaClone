import { getFeed , createPost } from "../services/post.api";


import { useContext, useEffect } from "react";
import {PostContext} from "../postContext"


export const usePost  = ()=>{

    const context = useContext(PostContext)

    const{loading,setLoading,setFeed ,feed , post, setPost} = context

    const handleGetFeed = async()=>{
        setLoading(true)
        try {
            const data = await getFeed()
            setFeed(data.posts || [])
        } catch (error) {
            console.error("Error fetching feed:", error)
            setFeed([])
        } finally {
            setLoading(false)
        }
    }

    const handleCreatePost  = async (imageFile,caption)=>{

        setLoading(true)

        const data  = await createPost(imageFile,caption)
        setFeed([data.post,...feed]

        )
        setLoading(false)

    }

    useEffect(()=>{
        handleGetFeed()
    },[])



    return{loading, feed , post , handleGetFeed , handleCreatePost}

}


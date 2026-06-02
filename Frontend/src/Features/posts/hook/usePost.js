import { getFeed } from "../services/post.api";


import { useContext } from "react";
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

    return{loading, feed , post , handleGetFeed}

}
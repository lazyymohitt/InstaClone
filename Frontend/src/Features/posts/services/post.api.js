import axios from "axios"

const api = axios.create({
    baseURL:"hhtp://localhost:3000",
    withCredentials:true
})


export async function getFeed() {

    const response = await api.get("/api/posts/feed")

    return response.data
    
}
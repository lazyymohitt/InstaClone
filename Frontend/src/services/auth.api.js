import axios from "axios"
import { useAsyncError } from "react-router-dom"
const api =  axios.create({
    baseUrl:"http://localhost:3000/api/auth",
    withCredentials:true
})

export async function Register(username,emmail,password){


    try{
        const response = await api.post("/register",{
            username,
            email,
            password
        })

        return response.data
    }
    catch(err){
        throw err
    }
}



export async function login(username,password){


    try{
        const respons = api.post("/login",{
            username,
            password
        }
        )
    }
    catch (err){
         throw err
    }
}



export async function getMe(){

try {
    const response =  api.get("/get-me")
    return response.data
} catch (err) {
   console.log(data)  
}
}
import { createContext, useState } from "react";

import {login, Register  , getMe} from "../services/auth.api"


export const authContext = createContext();


export function authProvider({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = userState(false)


    const handleLogin = async (email, password) => {

        setLoading(true)
            try{
                const response = await login(email,password)
                    setUser(response.user)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
    } 

    const handleRegister =  async (email, username , password)=>{
        setLoading(true)
        try{
            const response = await Register(email, password , username)
            setUser(response.user)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <authContext.provider value={{ user, loading, handleLogin,handleRegister}}>
            {children}
        </authContext.provider>
    )
} 
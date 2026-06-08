import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
import axios from "axios"
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const {handleRegister, loading} = useAuth()

  async function handleSubmit(e){
    e.preventDefault()
      await handleRegister( username, email, password)
      navigate("/")
      
    }

    if(loading){
      return(<main><h1>Loading..</h1></main>)
    }

  return (
    <div>
    <main>
    <div className="form-container">
     <h1>Register</h1>
     <form onSubmit={handleSubmit}>
      <input 
      onInput={(e)=>{setUsername(e.target.value)}}
       type="text" 
       placeholder="Username" 
       name="username"/>
      <input 
      onInput={(e)=>{setEmail(e.target.value)}} 
      type="email"
       placeholder="Email"
        name="email"/>
      <input 
      onInput={(e)=>{setPassword(e.target.value)}}
       type="password" 
       placeholder="Password"
        name="password"/>
      <button type="submit" className="button">Register</button>
     </form>
     <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
    </div>
    </main>
    </div>
  )
}

export default Register
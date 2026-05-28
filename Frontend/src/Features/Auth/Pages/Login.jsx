import React, { useState } from 'react'
import "../Pages/style/form.scss"
import { Link } from "react-router-dom"
import Register from './Register'
import axios from "axios"
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setpassword ] = useState("")

  const{handleLogin} = useAuth()

  function handleSubmit(e){
    e.preventDefault();
    handleLogin(username,password)
    .then(res=>{
      console.log(res)
    })

  } 

  return (
   <main>
   <div className="form-container">
      <h1>Login</h1>
      <p>Let's Get started...</p>
      <form onSubmit={handleSubmit}>
        <input 
        onInput={(e)=>{setUsername(e.target.value)}} 
        type="text" 
         placeholder="Username"
          name="username"/>
        <input
         onInput={(e)=>{setpassword(e.target.value)}}
          type="password" 
          placeholder = "password" 
          name="password"/>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
   </div>
  

    
   </main>
  )
}

export default Login
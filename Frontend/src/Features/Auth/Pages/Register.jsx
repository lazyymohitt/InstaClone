import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
import axios from "axios"

const Register = () => {

  const [username, setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function handleSubmit(e){
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/register",{
      username,
      email,
      password
    },{
      withCredentials:true
    })
    .then(res=>{
console.log(res.data)
    })
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
      <button type="submit">Register</button>
     </form>
     <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
    </div>
    </main>
    </div>
  )
}

export default Register
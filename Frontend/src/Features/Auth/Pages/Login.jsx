import React from 'react'
import "../Pages/style/form.scss"
import { Link } from "react-router-dom"
import Register from './Register'

const Login = () => {
  return (
   <main>
   <div className="form-container">
      <h1>Login</h1>
      <p>Let's Get started...</p>
      <form>
        <input type="text"  placeholder="Username" name="username"/>
        <input type="password" placeholder = "password" name="password"/>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
   </div>
  

    
   </main>
  )
}

export default Login
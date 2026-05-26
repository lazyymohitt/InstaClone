import React from 'react'
import { Link } from "react-router-dom"
import Login from './Login'

const Register = () => {
  return (
    <div>
    <main>
    <div className="form-container">
     <h1>Register</h1>
     <form>
      <input type="text" placeholder="Username" name="username"/>
      <input type="email" placeholder="Email" name="email"/>
      <input type="password" placeholder="Password" name="password"/>
      <button type="submit">Register</button>
     </form>
     <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
    </div>
    </main>
    </div>
  )
}

export default Register
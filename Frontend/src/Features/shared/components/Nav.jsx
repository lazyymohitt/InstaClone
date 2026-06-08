import React from 'react'
import "../style/nav.scss"
import { Navigate, useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()
  return (
    <nav className='nav-bar'>
        <p>Lunara 🌌</p>
        <button onClick={()=>{navigate("/create-post")}} className="button primary-button">Create Post</button>
    </nav>
  )
}

export default Nav
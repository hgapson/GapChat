// import React from 'react'
import '../App.scss'

function Login() {
  return (
    <div className="regBody">
      <div className="regContainer">
        <span className="logo">GapChat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>You don't have account? Register</p>
      </div>
    </div>
  )
}

export default Login

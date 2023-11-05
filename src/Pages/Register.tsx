// import React from 'react'
import '../App.scss'
import add from '../Images/image.png'

function Register() {
  return (
    <div className="regBody">
      <div className="regContainer">
        <span className="logo">GapChat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You don't have account? Login</p>
      </div>
    </div>
  )
}

export default Register

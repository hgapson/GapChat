import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      // Successfully logged in
      console.log('Logged in:', userCredential.user.uid)
      navigate('/')
    } catch (error) {
      setError('Invalid account. create account.')
      console.error('Login error:', error)
    }
  }

  return (
    <div className="regBody">
      <div className="regContainer">
        <span className="logo">GapChat</span>
        <span className="title">Login</span>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login

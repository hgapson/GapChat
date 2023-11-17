// import React from 'react'
import '../App.scss'
import add from '../Images/image.png'
import { Alert } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { UseAuth } from '../context/AuthContext'

function Register() {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null) // Similarly for passwordConfirmRef
  const auth = UseAuth() // Assuming useAuth returns the authentication context

  if (typeof auth === 'undefined') {
    // Handle the case where auth is undefined, if needed
  }
  const { signup } = UseAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('password do not match')
    }
    if (emailRef.current && emailRef.current.value) {
      try {
        setError('')
        setLoading(true)
        await signup(
          emailRef.current && emailRef.current.value,
          passwordRef.current?.value || ''
        )
      } catch (error) {
        setError('failed to create an account')
      }
    } else {
      setError('Email is empty')
    }
    setLoading(false)
  }

  return (
    <div className="regBody">
      <div className="regContainer">
        <span className="logo">GapChat</span>
        <span className="title">Register</span>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" />
          <input type="email" id="email" ref={emailRef} placeholder="email" />
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="password"
          />
          <input
            type="password"
            id="password"
            ref={passwordConfirmRef}
            placeholder="comfirm password"
          />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
        </form>
        <p>You don't have account? Login</p>
      </div>
    </div>
  )
}

export default Register

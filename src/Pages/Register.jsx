import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import add from '../Images/image.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'

function Register() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value
    const file = e.target.file.files[0]

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, `avatars/${res.user.uid}/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        null,
        (uploadError) => {
          setError('Error uploading file')
          console.error('Error uploading file:', uploadError)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            setSuccess(true)
            setTimeout(() => {
              navigate('/login')
            }, 1000) // Redirect to login page after 2 seconds
          })
        }
      )
    } catch (authError) {
      setError('Error creating user')
      console.error('Error creating user:', authError)
    }
  }

  return (
    <>
      <div className="regBody">
        <div className="regContainer">
          <span className="logo">GapChat</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <input
              autoComplete="new-password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password "
            />
            <input
              autoComplete="confirm-password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
            <input
              style={{ display: 'none' }}
              type="file"
              id="file"
              name="file"
            />
            <label htmlFor="file">
              <img src={add} alt="Add Avatar" />
              <span>Add an Avatar</span>
            </label>
            <button type="submit" color="success">
              Sign up
            </button>
            {error && <span className="error-message">{error}</span>}
            {success && (
              <span className="success-message">
                Registration successful! Redirecting to login...
              </span>
            )}
          </form>
          <p>
            You already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register

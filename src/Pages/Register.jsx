// import { Link } from 'react-router-dom'
import { useState } from 'react'
import add from '../Images/image.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

function Register() {
  const [error, setError] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const file = e.target.file.files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
          })
        }
      )
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
      <div className="regBody">
        <div className="regContainer">
          <span className="logo">GapChat</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="name" />
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
              placeholder="Enter Password"
            />
            <input
              autoComplete="new-password"
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm Password"
            />
            <input
              style={{ display: 'none' }}
              type="file"
              id="file"
              name="file"
            />
            <label htmlFor="file">
              <img src={add} alt="my picture" />
              <span>Add an Avatar</span>
            </label>
            <button color="success">Sign up</button>
            {error && <span>Something went wrong</span>}
          </form>
          <p>You don't have account? Login</p>
        </div>
      </div>
    </>
  )
}
export default Register

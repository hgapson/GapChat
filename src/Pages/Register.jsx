// import { Link } from 'react-router-dom'
import add from '../Images/image.png'

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
  }
  return (
    <>
      <div className="regBody">
        <div className="regContainer">
          <span className="logo">GapChat</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
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
            <input style={{ display: 'none' }} type="file" id="file" />
            <label htmlFor="file">
              <img src={add} alt="" />
              <span>Add an Avatar</span>
            </label>
            <button color="success">Sign up</button>
          </form>
          <p>You don't have account? Login</p>
        </div>
      </div>
    </>
  )
}
export default Register

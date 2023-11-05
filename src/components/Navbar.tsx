import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">GapChat</span>
      <div className="user">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocJjlgHNv7qF2ZQm2aW6lCdttRM_N2s76O5zE34aOI2PTPc=s288-c-no"
          alt="Gap"
        />
        <span>Gapson</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

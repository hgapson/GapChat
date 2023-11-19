import React from 'react'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <FontAwesomeIcon icon={faPowerOff} className="video" />
      </div>
    </div>
  )
}

export default Navbar

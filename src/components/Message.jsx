import React from 'react'

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocJjlgHNv7qF2ZQm2aW6lCdttRM_N2s76O5zE34aOI2PTPc=s288-c-no"
          alt="user"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello there</p>
        {/* <img
          src="https://rawk9.com/cdn/shop/articles/dreamstime_xxl_96711049.jpg?v=1600986222"
          alt="message"
        /> */}
      </div>
    </div>
  )
}

export default Message

import React from 'react'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="search user" />
      </div>
      <div className="userChat">
        <img
          src="https://pbs.twimg.com/profile_images/1191373045581135872/9gpPBUkK_400x400.jpg"
          alt="Bella pic"
        />
        <div className="userChatInfo">
          <span>Bella</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search

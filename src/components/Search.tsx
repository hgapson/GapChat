import React from 'react'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="search user" />
      </div>
      <div className="userChat">
        <img
          src="https://scontent.fakl1-4.fna.fbcdn.net/v/t1.15752-9/387346489_620212373415151_2413293277471518005_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=-MBX__Pym7QAX-V2lUc&_nc_ht=scontent.fakl1-4.fna&oh=03_AdTJpc_1X5cE_aU7tfu3t9I6xMz1mnEFpOQQij4wY2KHWQ&oe=656ED6B7"
          alt="Bella pic"
        />
        <div className="userChatInfo">
          <span>Bella</span>
        </div>
      </div>
    </div>
  )
}

export default Search

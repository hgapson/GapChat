import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVideo,
  faUserPlus,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons'
import Message from './Message'

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Bella</span>

        <div className="chatIcons">
          <FontAwesomeIcon icon={faVideo} className="video" />
          <FontAwesomeIcon icon={faUserPlus} className="addUser" />
          <FontAwesomeIcon icon={faEllipsis} className="dots" />
        </div>
      </div>
      <Message />
    </div>
  )
}

export default Chat

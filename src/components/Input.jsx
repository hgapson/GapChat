import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons/faPaperPlane'

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="type something..." />
      <input type="file" style={{ display: 'none' }} id="file" />
      <label htmlFor="file">
        <FontAwesomeIcon icon={faPaperclip} className="file" />
      </label>
      <FontAwesomeIcon icon={faPaperPlane} className="send" />
    </div>
  )
}

export default Input

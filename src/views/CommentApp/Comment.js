import React from 'react'

export default ({userName, content}) => {
  return (
    <div className='comment'>
      <div className='comment-user'>
        <span>{userName}</span>：
      </div>
      <p>{content}</p>
    </div>
  )
}

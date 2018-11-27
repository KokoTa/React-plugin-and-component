import React, { Component } from 'react'
import CommentInput from './CommentInputContainer'
import CommentList from './CommentListContainer'
import '../style.css'

class CommentApp extends Component {

  render() {
    return (
      <div className='comment-app-wrap'>
        <div className='comment-app-content'>
          <CommentInput></CommentInput>
          <CommentList></CommentList>
        </div>
      </div>
    )
  }
}

export default CommentApp

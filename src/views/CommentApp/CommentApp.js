import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './style.css'

export default class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  handleSubmit = (comment) => {
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.setState((prevState) => ({
      comments: [...prevState.comments, comment]
    }))
  }

  render() {
    return (
      <div className='comment-app-wrap'>
        <div className='comment-app-content'>
          <CommentInput onSubmit={this.handleSubmit}></CommentInput>
          <CommentList comments={this.state.comments}></CommentList>
        </div>
      </div>
    )
  }
}

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

  componentWillMount = () => {
    this._getCommentsOnLocalStorage()
  }

  _saveCommentsOnLocalStorage(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  _getCommentsOnLocalStorage() {
    const comments = localStorage.getItem('comments')
    if (comments) this.setState({ comments: JSON.parse(comments) })
  }

  handleSubmit = (comment) => {
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    comment.createTime = +new Date()
    const comments = [...this.state.comments, comment]
    this.setState({ comments })
    this._saveCommentsOnLocalStorage(comments)
  }

  handleDeleteComment = (index) => {
    const comments = [...this.state.comments]
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveCommentsOnLocalStorage(comments)
  }

  render() {
    return (
      <div className='comment-app-wrap'>
        <div className='comment-app-content'>
          <CommentInput onSubmit={this.handleSubmit}></CommentInput>
          <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment}></CommentList>
        </div>
      </div>
    )
  }
}

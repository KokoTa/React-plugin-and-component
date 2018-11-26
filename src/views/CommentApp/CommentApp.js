import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './style.css'

import wrapOperateComments from './wrapOperateComments'

class CommentApp extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    saveComments: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    }
  }

  handleSubmit = (comment) => {
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    comment.createTime = +new Date()
    const comments = [...this.state.comments, comment]
    this.setState({ comments })
    this.props.saveComments(comments)
  }

  handleDeleteComment = (index) => {
    const comments = [...this.state.comments]
    comments.splice(index, 1)
    this.setState({ comments })
    this.props.saveComments(comments)
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

export default wrapOperateComments(CommentApp, 'comments');

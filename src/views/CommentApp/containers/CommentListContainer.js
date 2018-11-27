import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initComments, deleteComment } from '../reducers/comments'
import CommentList from '../components/CommentList'

export class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func, // 如果不是必须，则在调用时要加 if 判断，防止调用不存在的方法时报错
    onDeleteComment: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this._loadInitComments()
  }

  _loadInitComments() {
    let comments = localStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
    if (this.props.initComments) {
      this.props.initComments(comments)
    }
  }

  handleDeleteComment = (commentIndex) => {
    const { comments } = this.props;
    const newComments = [
      ...comments.slice(0, commentIndex),
      ...comments.slice(commentIndex + 1)
    ]
    localStorage.setItem('comments', JSON.stringify(newComments))
    this.props.onDeleteComment(commentIndex)
  }

  render() {
    return (
      <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment}></CommentList>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments
})

const mapDispatchToProps = (dispatch => ({
  initComments: comments => dispatch(initComments(comments)),
  onDeleteComment: commentIndex => dispatch(deleteComment(commentIndex))
}))

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)

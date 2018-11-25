import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

export default class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        userName: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        createTime: PropTypes.number.isRequired
      }).isRequired
    ),
    onDeleteComment: PropTypes.func.isRequired
  }

  static defaultProps = {
    comments: []
  }

  handleDeleteComment = (index) => {
    const { onDeleteComment } = this.props
    onDeleteComment(index)
  }

  render() {
    const { comments } = this.props

    return (
      <div>
        {comments.map((c, i) => <Comment {...c} onDeleteComment={this.handleDeleteComment} index={i} key={i}></Comment>)}
      </div>
    )
  }
}

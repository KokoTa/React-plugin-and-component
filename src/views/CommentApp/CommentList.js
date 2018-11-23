import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const { comments } = this.props

    return (
      <div>
        {comments.map((c, i) => <Comment userName={c.userName} content={c.content} key={i}></Comment>)}
      </div>
    )
  }
}

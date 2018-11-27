import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createTime: PropTypes.number.isRequired,
    }),
    onDeleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      timeString: ''
    }
  }

  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString,
      5000
    )
  }

  componentWillUnmount() {
    clearInterval(this._timer)
    console.log('componentWillUnmount')
  }

  _updateTimeString = () => {
    const { createTime } = this.props.comment
    const duration = (+new Date() - createTime) / 1000
    const timeString = duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(1, duration))}秒前`
    this.setState({ timeString })
  }

  _filterContent = (content) => {
    return content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  handleDeleteComment = () => {
    const { onDeleteComment, index } = this.props
    onDeleteComment(index)
  }

  render() {
    const { timeString } = this.state
    const { userName, content } = this.props.comment
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{userName}</span>：
        </div>
        <p dangerouslySetInnerHTML={{ __html: this._filterContent(content) }}></p>
        <div className='comment-time'>
          { timeString }
        </div>
        <div className='comment-delete'>
          <button onClick={this.handleDeleteComment}>删除</button>
        </div>
      </div>
    )
  }
}

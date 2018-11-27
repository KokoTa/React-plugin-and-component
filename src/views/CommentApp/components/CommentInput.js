import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component {
  static propTypes = {
    userName: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onUserNameInputBlur: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      userName: props.userName || '',
      content: ''
    }
    this.textarea = null
  }

  componentDidMount() {
    this.textarea.focus()
  }

  handleUserNameChange = (e) => {
    this.setState({ userName: e.target.value })
  }
  handleContentChange = (e) => {
    this.setState({ content: e.target.value })
  }
  handleSubmit = (e) => {
    const { userName, content } = this.state
    this.props.onSubmit({ userName, content})
    this.setState({ content: '' })
  }
  handleUserNameBlur = (e) => {
    this.props.onUserNameInputBlur(e.target.value)
  }

  render() {
    const { userName, content } = this.state
    return (
      <div className='comment-input'>
        <div className='comment-input-field'>
          <div className='comment-input-name'>用户名：</div>
          <div className='comment-input-area'>
            <input value={userName} onChange={this.handleUserNameChange} onBlur={this.handleUserNameBlur}></input>
          </div>
        </div>
        <div className='comment-input-field'>
          <div className='comment-input-name'>评论内容：</div>
          <div className='comment-input-area'>
            <textarea value={content} onChange={this.handleContentChange} ref={(el) => this.textarea = el}></textarea>
          </div>
        </div>
        <div className='comment-input-button'>
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

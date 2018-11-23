import React, { Component } from 'react'

export default class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      content: ''
    }
  }

  handleUserNameChange = (e) => {
    this.setState({ userName: e.target.value })
  }
  handleContentChange = (e) => {
    this.setState({ content: e.target.value })
  }
  handleSubmit = (e) => {
    if (this.props.onSubmit) {
      const { userName, content } = this.state
      this.props.onSubmit({ userName, content})
    }
    this.setState({ content: '' })
  }

  render() {
    const { userName, content } = this.state
    return (
      <div className='comment-input'>
        <div className='comment-input-field'>
          <div className='comment-input-name'>用户名：</div>
          <div className='comment-input-area'>
            <input value={userName} onChange={this.handleUserNameChange}></input>
          </div>
        </div>
        <div className='comment-input-field'>
          <div className='comment-input-name'>评论内容：</div>
          <div className='comment-input-area'>
            <textarea value={content} onChange={this.handleContentChange}></textarea>
          </div>
        </div>
        <div className='comment-input-button'>
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.state = {
      userName: '',
      content: ''
    }
    this.textarea = null
  }

  componentWillMount() {
    const userName = localStorage.getItem('userName')
    if (userName) this.setState({ userName })
  }
  componentDidMount() {
    this.textarea.focus()
  }

  handleUserNameChange = (e) => {
    this.setState({ userName: e.target.value })
  }
  handleUserNameBlur = (e) => {
    this._saveUserNameOnLocalStorage(e.target.value)
  }
  _saveUserNameOnLocalStorage(name) {
    localStorage.setItem('userName', name)
  }
  handleContentChange = (e) => {
    this.setState({ content: e.target.value })
  }
  handleSubmit = (e) => {
    const { userName, content } = this.state
    this.props.onSubmit({ userName, content})
    this.setState({ content: '' })
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

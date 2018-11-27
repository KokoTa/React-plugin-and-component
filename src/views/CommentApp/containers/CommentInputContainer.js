import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../reducers/comments'
import CommentInput from '../components/CommentInput'

export class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { userName: '' }
  }

  componentWillMount() {
    this._loadUserName()
  }

  _loadUserName() {
    const userName = localStorage.getItem('userName')
    if (userName) this.setState({ userName })
  }

  handleSaveUserName = (userName) => {
    localStorage.setItem('userName', userName)
  }

  handleSubmit = (comment) => {
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    comment.createTime = +new Date()
    const { comments } = this.props
    const newComments = [...comments, comment]
    localStorage.setItem('comments', JSON.stringify(newComments))
    this.props.onSubmit(comment)
  }

  render() {
    return (
      <CommentInput userName={this.state.userName} onUserNameInputBlur={this.handleSaveUserName} onSubmit={this.handleSubmit}></CommentInput>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: comment => dispatch(addComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer)


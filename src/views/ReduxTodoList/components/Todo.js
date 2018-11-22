import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * 项目
 */
export class Todo extends Component {
  // 限定参数类型
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    const { onClick, completed, text } = this.props;

    return (
      <li
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
      </li>
    )
  }
}

export default Todo
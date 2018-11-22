import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

/**
 * 项目列表
 */
export class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getList();
    this.props.getInfo();
  }

  render() {
    const {todos, onTodoClick} = this.props;
    return (
      <ul>
        { todos.map((todo, index) => (
          <Todo key={index} {...todo} onClick={() => onTodoClick(todo.id)}></Todo>
        )) }
      </ul>
    )
  }
}

export default TodoList

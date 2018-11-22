import { connect } from 'react-redux'
import { toggleTodo, VisibleStatusOptions } from '../actions'
import TodoList from '../components/TodoList'

/**
 * 给 TodoList 组件设置状态管理
 */

function getVisibleTodos(todos, status) {
  switch (status) {
    case VisibleStatusOptions.SHOW_ALL:
      return todos
    case VisibleStatusOptions.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibleStatusOptions.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown status')
  }
}

// 获取状态数据
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibleStatus)
})

// 设置状态行为
const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
import { connect } from 'react-redux'
import { toggleTodo, VisibleStatusOptions, reqList, getInfo } from '../actions'
import TodoList from '../components/TodoList'

/**
 * 给 TodoList 组件设置状态管理，返回一个新组件
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

// 获取数据
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibleStatus)
})

// 设置行为
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(reqList('K1')),
  getInfo: () => dispatch(getInfo('K2')),
  onTodoClick: id => dispatch(toggleTodo(id))
})

// 数据和行为都存放在 props 属性中
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
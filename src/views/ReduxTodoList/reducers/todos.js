const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": // 添加项目
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case "TOGGLE_TODO": // 完成状态切换
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    default: // 返回原始状态
      return state
  }
}

export default todos
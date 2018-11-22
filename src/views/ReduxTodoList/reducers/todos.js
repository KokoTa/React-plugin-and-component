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
    case "GET_LIST": // 异步获取项目列表
      return [...state, ...action.list]
    case "SHOW_INFO": // 异步新增一个项目
      return [...state, action.result]
    case "CLEAR_TODOS": // 清空项目
      return []
    default: // 返回原始状态
      return state
  }
}

export default todos
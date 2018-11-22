/**
 * 定义行为
 */

let index = 0;

// 添加项目
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: index++,
  text
})

// 改变项目状态
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

// 改变列表显示模式
export const setVisibleStatus = (status) => ({
  type: 'SET_VISIBLE_STATUS',
  status
})

// 显示模式选项
export const VisibleStatusOptions = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


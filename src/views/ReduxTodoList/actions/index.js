/**
 * 定义行为
 */

// 项目 id 值
let index = 0;
// 显示模式选项
export const VisibleStatusOptions = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}



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
  type: 'SET_STATUS',
  status
})

// 使用 redux-thunk 进行模拟异步获取信息
// 拿到数据后再正常发送 action
// redux-thunk 就是一个拦截函数，在触发 action 前进行异步获取信息
// redux-saga 就是一个 reducer，用户点击触发 action 后触发对应的 saga 监听，获取数据后通过触发另一个 action 进行同步处理
export const getList = (name) => {
  return (dispatch, getState) => {
    console.log(getState())
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 999,
            text: '我是 thunk 异步数据，我的名字是' + name,
            completed: false,
          }
        ])
      }, 1000);
    })
    .then((result) => {
      dispatch({
        type: 'GET_LIST',
        list: result
      })
    })
  }
}

// 触发 redux-saga 的拦截
export const getInfo = (name) => ({
  type: 'GET_INFO',
  name
})

// 清空项目
export const clearTodos = () => ({
  type: 'CLEAR_TODOS'
})
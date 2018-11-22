import { VisibleStatusOptions } from '../actions'

const visibleStatus = (state = VisibleStatusOptions.SHOW_ALL, action) => {
  switch (action.type) { // 设置列表可视状态(全部显示/只显示完成/只显示未完成)
    case 'SET_STATUS':
      return action.status
    default:
      return state
  }
}

export default visibleStatus
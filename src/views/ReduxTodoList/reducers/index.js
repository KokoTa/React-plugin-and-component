import { combineReducers } from 'redux'
import todos from './todos'
import visibleStatus from './visibleStatus'

export default combineReducers({
  todos,
  visibleStatus
})
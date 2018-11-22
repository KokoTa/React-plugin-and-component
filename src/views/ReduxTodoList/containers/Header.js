import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions' // 获取 “添加项目” 这个行为

/**
 * 添加项目，设置状态管理，这是一个混合组件(混合了展示和容器)
 */
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if(!input.value.trim()) return
        dispatch(addTodo(input.value)) // 通过 dispatch 发送 “添加项目” 这个行为给 reducer 去处理
        input.value = ''
      }}>
        <input ref={value => input = value}></input>
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
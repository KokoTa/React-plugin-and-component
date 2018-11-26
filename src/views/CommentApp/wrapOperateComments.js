import React, { Component } from 'react';

/**
 * 高阶组件：进行加工后返回一个新组件
 * 该组件封装了获取和存储 LocalStorage 的逻辑
 */
export default (WrapComponent, name) => {
  class OperateComments extends Component {
    constructor() {
      super();
      this.state = {
        comments: []
      }
    }

    componentWillMount() { // 获取评论
      const comments = localStorage.getItem(name)
      if (comments) this.setState({ comments: JSON.parse(comments) })
    }

    saveComments = (comments) => { // 保存评论
      localStorage.setItem(name, JSON.stringify(comments))
    }

    render() {
      return (
        <WrapComponent
          comments={this.state.comments}
          saveComments={this.saveComments}
        ></WrapComponent>
      )
    }
  }

  return OperateComments;
}

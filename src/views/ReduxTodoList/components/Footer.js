import React, { Component } from 'react'
import VisibleLink from '../containers/VisibleLink'
import { VisibleStatusOptions } from '../actions'

/**
 * 过滤按钮容器
 */
export class Footer extends Component {

  render() {
    return (
      <div>
        <span>Show:</span>
        <VisibleLink status={VisibleStatusOptions.SHOW_ALL}>All</VisibleLink>
        <VisibleLink status={VisibleStatusOptions.SHOW_ACTIVE}>Active</VisibleLink>
        <VisibleLink status={VisibleStatusOptions.SHOW_COMPLETED}>Completed</VisibleLink>
      </div>
    )
  }
}

export default Footer

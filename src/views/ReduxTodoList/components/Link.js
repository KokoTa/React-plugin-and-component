import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * 过滤按钮
 */
export class Link extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { active, children, onClick } = this.props;
    return (
      <button
        onClick={onClick}
        disabled={active}
        style={{marginLeft: '10px'}}>
        {children}
      </button>
    )
  }
}

export default Link
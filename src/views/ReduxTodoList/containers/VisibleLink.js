import { connect } from 'react-redux'
import { setVisibleStatus } from '../actions'
import Link from '../components/Link'

/**
 * 给 Link 组件设置状态管理，返回一个新组件
 */

// 按钮是否可点击
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.status === state.visibleStatus
})

// 触发切换项目列表的显示
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibleStatus(ownProps.status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

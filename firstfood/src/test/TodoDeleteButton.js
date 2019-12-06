import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { delTodo } from '../action/index'

const TodoDeleteButton = props => {

  return (
    <button onClick={() => props.delTodo({ id: props.itemid })}>刪除</button>
  )
}

// 第3種，: redux(state)綁定到此元件的props、部份綁定action creator
const mapDispatchToProps = dispatch => bindActionCreators({ delTodo }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(TodoDeleteButton)

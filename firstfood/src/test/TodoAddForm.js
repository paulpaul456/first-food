import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo, addTodoAsync } from '../action'

class TodoAddForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleClick = event => {
    const text = this.state.value
    const id = +new Date()
    const payload = { id: id, text: text }

    //第3種，部份綁定action creator
    //this.props.addTodo(payload)
    this.props.addTodoAsync(payload)

    //clean text input
    this.setState({ value: '' })
  }

  render() {
    console.log("addform")
    console.log(this.props)
    return (
        <>
          <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>新增</button>
        </>
    )
  }
}

// 第3種，: redux(state)綁定到此元件的props、部份綁定action creator
const mapDispatchToProps = dispatch =>
    bindActionCreators({ addTodo, addTodoAsync }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(TodoAddForm)
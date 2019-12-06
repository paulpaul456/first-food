import React ,{useEffect} from 'react'
import { connect } from 'react-redux'
import TodoDeleteButton from './TodoDeleteButton'

const TodoList = props => {
  useEffect(()=>{
    console.log(`更新後的 State`)

    return (() => {
      console.log(`更新前的 State `)
    })
  })
  // console.log("TodoList",props.todos)
  return (
    <ul>
      {props.todos.map(item => (
        <li key={item.id}>
          {item.title}
          <TodoDeleteButton itemid={item.id} />
        </li>
      ))}
    </ul>
  )
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => ({ todos: store.todos })

export default connect(mapStateToProps)(TodoList)

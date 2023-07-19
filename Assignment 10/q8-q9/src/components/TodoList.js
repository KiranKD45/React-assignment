import React from 'react'

const TodoList = ({todos, setTodos}) => {
  return (
    <div>{
        todos.map((todos)=>{
            <li key={todos.id}>
                <input type='text'
                value={todos.title} onChange={(e)=>e.preventDefault()}/>
            </li>
        })
    }</div>
  )
}

export default TodoList
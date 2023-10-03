import React from 'react'
import { FetchFailed } from '../lib/exceptions'

const TodoList = async () => {
    const res = await fetch('http://localhost:3000/api/todos', { next: {revalidate: 0}})
    
    if(!res.ok) throw new FetchFailed()
    
    const todos: Todo[] = await res.json()


    console.log('hello')


  return (
    <ul>{todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
  )
}

export default TodoList
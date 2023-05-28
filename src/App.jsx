import { useState } from 'react'
import { nanoid } from 'nanoid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const DUMMY_TODO = [
  {
    id : 1,
    title: "Belajar React",
    isComplete : false,
  }
]


function App() {
  const [todos, setTodo] = useState(DUMMY_TODO);
  const [newTodo, setNewTodo] = useState('')
  const [error, setError] = useState("")

  const addNewTodo = () => {
    if (newTodo.length === 0) {
      setError("Todo tidak boleh kosong")
      return
    }
    
    const updatedTodo = [...todos]
    let objTodo = {
      id : nanoid(),
      title: newTodo,
      isCompleted : false
    }
    
    updatedTodo.push(objTodo);
    setTodo(updatedTodo)
    setNewTodo("")
  } 

  const completeTodo = (targetTodo) => {
    const updateTodo = todos.map( todo => {
      if (todo.id != targetTodo) return todo
        todo.isComplete = !todo.isComplete
      return todo
    })
    setTodo(updateTodo)
  } 


  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text" 
        placeholder='Isi Todo disini' 
        value={newTodo} 
        onChange={event=> setNewTodo(event.target.value)}
      />

      <button onClick={addNewTodo}>Create</button>
      {
        error.length > 0 ? (
          <p>{error}</p> 
        ) : null
      }

      <ul>
        {
          todos.map((todo) => (
            <li 
              key={todo.id} 
              className='todo-item' 
              style={{textDecoration: (todo.isComplete?  "line-through" : "none") }}>
              <input type="checkbox" onChange={() => {completeTodo(todo.id)}}/>
              {todo.title}
              <button style={{marginLeft: "16px"}}>X</button>
            </li>
          ))
        }
      </ul>

    </>
  );
}

export default App

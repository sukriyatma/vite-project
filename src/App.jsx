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
  const [] = useState()


  const addNewTodo = () => {
    const updatedTodo = [...todos]
    let objTodo = {
      id : nanoid(),
      title: newTodo,
      isComplete : false
    }
    
    updatedTodo.push(objTodo);
    setTodo(updatedTodo)
    setNewTodo("")
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

      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App

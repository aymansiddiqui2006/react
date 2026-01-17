import React, { useState } from 'react'
import { TodoProvider } from './context'
import './App.css'

function App() {
  const [todos, settodos] = useState([])
  const addTodo = (todo) => {
    settodos((prev) => [...prev, { id: date.now(), ...todo }])
  }
  const updateTodo = (id, todo) => {
    settodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }
  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const tooglecomplete = (id) => {
    settodos((prev) => prev.map((prevtodo) => prevtodo === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo))
  }

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, tooglecomplete }}>
      <div className="bg-gray-600 h-screen w-screen flex flex-col">
        <div className="text-4xl font-bold font-mono text-white flex justify-center mt-8 mb-8 ">
          Manage your todo
        </div>
        <div>

        </div>
        <div className="flex fexl-wrap gap-y-3">

        </div>

      </div>
    </TodoProvider>
  )
}

export default App

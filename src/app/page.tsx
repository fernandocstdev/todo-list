'use client'

import Image from 'next/image'
import { Todos } from './components/Todos'
import { useState } from 'react'
import { type TodoTitle, type FilterValue, type TodoId, type Todo as TodoType, type TodoComments } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Filters } from './components/Filters'
import { CreateTodo } from './components/CreateTodo'

const mockTodos = [
  {
    id: '1',
    title: 'Todo 1',
    comments: 'comentarios',
    date: '16/09/2023',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    comments: 'comentarios',
    date: '16/09/2023',
    completed: true
  },
  {
    id: '3',
    title: 'Todo 3',
    comments: 'comentarios',
    date: '16/09/2023',
    completed: false
  },
  {
    id: '4',
    title: 'Todo 4',
    comments: 'comentarios',
    date: '16/09/2023',
    completed: true
  },
  {
    id: '5',
    title: 'Todo 5',
    comments: 'comentarios',
    date: '16/09/2023',
    completed: true
  }
]

export default function Home(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [loading, setLoading] = useState(false)
  const [filterSelected, setfilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => { // recibe id de tipo TodoId y no regresa nada la funcion
    const newTodos = todos.filter(todo => todo.id !== id) // guarda los id que sean diferentes al id que pasamos
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  const handleRemoveAllCompleted = (): void => {
    setLoading(true)
    setTimeout(() => {
      const newTodos = todos.filter(todo => !todo.completed)
      setTodos(newTodos)
      setLoading(false)
    }, 1200)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setfilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  function getDate(): string {
    const hoy = new Date()
    const dia = hoy.getDate().toString().padStart(2, '0')
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0') // Sumamos 1 porque los meses van de 0 a 11
    const anio = hoy.getFullYear()

    return `${dia}/${mes}/${anio}`
  }

  const handleAddTodo = ({ title }: TodoTitle, { comments }: TodoComments): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      comments,
      date: getDate(),
      completed: false
    }

    console.log(new Date())

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <main className="flex flex-col w-full min-h-screen py-20 items-center">
      <Image
        className="relative w-1/3 h-auto"
        src="/todoImage.svg"
        alt="Next.js Logo"
        width={100}
        height={37}
        priority
      />
      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
      <Todos
        todos={filteredTodos}
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        loading={loading}
      />
      <CreateTodo onAddTodo={handleAddTodo} />
    </main>
  )
}

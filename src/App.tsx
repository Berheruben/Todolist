import React, { useEffect, useState } from 'react';
import {AddTodo,Todo,ToggleComplete,ToggleDelete} from './utils/type';
import './App.css';
import { TodoForm } from './components/TodoForm';
import {TodoList} from './components/TodoList';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex: 1 1;
flex-direction: column;
padding: 8vw 9vw;
`;

export const loadData = ()=>{
  const TaskJSON = localStorage.getItem('todos')
  if (TaskJSON) return JSON.parse(TaskJSON) 
  return []
}

const App=() => {  
  const [todos, setTodos] = useState<Array<Todo>>(loadData());
  const addTodo: AddTodo = text => {
    if (text) setTodos(todos => [
      ...todos, 
      { id: todos.length +1, text, complete:false }
    ])
  }
 
  const toggleComplete: ToggleComplete = (selectedTodo: Todo) =>{
    const updateTodos = todos.map(todo=> {
      if(todo.id === selectedTodo.id) {
        return ({...todo, complete: !todo.complete})
      }
      return todo
    })
    // Sort array by putting the completed item at the bottom of the list
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .sort((a, _) => a.complete ? 1 : -1)
    setTodos(updateTodos)
  }

  const toggleDelete: ToggleDelete = ({ id: itemId }) => {
   setTodos(todos => todos.filter(todo => todo.id !== itemId))
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
   },[todos])
  
  return (
    <Container>
      <TodoList todos={todos} toggleDelete={toggleDelete}  toggleComplete={toggleComplete}/>
      <TodoForm addTodo={addTodo} />
    </Container> 
  )
}

export default App

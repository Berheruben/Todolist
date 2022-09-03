import React, { useEffect, useState } from 'react';
import {AddTodo,Todo,ToggleComplete,ToggleDelete} from './utils/type';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoListItem } from './components/TodoListItem';
import {TodoList} from './components/TodoList';
import styled from 'styled-components';

const Container = styled.div`

`;
const Container2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 80px 160px;
gap: 8px;

width: 1632px;
height: 409px;

background: #242424;
box-shadow: 4px 12px 24px rgba(0, 0, 0, 0.25);
border-radius: 32px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;

`;


const  App=() => {
  
  const loadData = ()=>{
    let TaskJSON = localStorage.getItem("todos")
    if ( TaskJSON ) return JSON.parse(TaskJSON) 
   else return []
  }
  
  const [todos,setTodos] = useState<Array<Todo>>(loadData());
  
  
  const addTodo:AddTodo = newTodo =>{
         if(newTodo !== ""){
           setTodos([...todos, { text: newTodo, complete:false}]);
         }
  }
 
  const ToggleComplete:ToggleComplete = selectTodo =>{
    const updateTodos = todos.map(todo=>{
      if(todo === selectTodo){
        return{...todo, complete: !todo.complete}
      }
      return todo;
    })
    setTodos(updateTodos)
  }
  const ToggleDelete:ToggleDelete = deletedTodo =>{
   const updateTodos = todos.filter(todo => todo.text !== deletedTodo.text)
   setTodos(updateTodos);
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
    
   },[todos])
  


 
  return (
<Container2>
    <Container>

<TodoForm addTodo={addTodo} />

<TodoList todos={todos} toggleDelete={ToggleDelete}  toggleComplete={ToggleComplete}/>


    </Container>
</Container2>


   
  );
}

export default App;

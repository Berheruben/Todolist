import React, { useState } from 'react';
import {AddTodo,Todo,ToggleComplete,ToggleDelete} from './utils/type';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoListItem } from './components/TodoListItem';
import {TodoList} from './components/TodoList';

const  App=() => {
  const [todos,setTodos] = useState<Array<Todo>>([]);

  const addTodo:AddTodo = newTodo =>{
         if(newTodo !== ""){
           setTodos([...todos, {id:+1, text: newTodo, complete:false}]);
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
  const ToggleDelete:ToggleDelete = selectedTodo =>{
   const updateTodos = todos.filter(todo => todo.text !== selectedTodo.text)
   setTodos(updateTodos);
  }
  
  /*
 const saveData = () =>{
localStorage.setItem("list", JSON.stringify(todos))
 }
 const loadData = ()=>{
   const TaskJSON = localStorage.getItem("list")
   if ( TaskJSON == null ) return [ ]
  return JSON.parse ( TaskJSON )
 }
 */
  return (
    <div>
<h1>TITOLO</h1>
<TodoList todos={todos} toggleDelete={ToggleDelete}  toggleComplete={ToggleComplete}/>
    <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;

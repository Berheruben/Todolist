import React, { useState } from 'react';
import {AddTodo,Todo,ToggleComplete} from './utils/type';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoListItem } from './components/TodoListItem';
import {TodoList} from './components/TodoList';
function App() {
  const [todos,setTodos] = useState<Array<Todo>>([]);

  const addTodo:AddTodo = newTodo =>{
         if(newTodo !== ""){
           setTodos([...todos, {text: newTodo, complete:false}]);
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
<TodoList todos={todos} toggleComplete={ToggleComplete}/>
    <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;

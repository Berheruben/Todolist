import React from "react";
import { TodoListItem } from "./TodoListItem";
import {AddTodo,Todo,ToggleComplete,TodoListItemProps,ToggleDelete} from '../utils/type'

interface TodoListProps { 
    todos:Array<Todo>;
    toggleComplete: ToggleComplete
    toggleDelete: ToggleDelete
}
export const TodoList : React.FC < TodoListProps > = ( { todos , toggleComplete , toggleDelete} ) =>{
    return(
        <ul>
 {todos.map(todo =>(
     <TodoListItem
     key={todo.id}
     toggleDelete={toggleDelete}
     toggleComplete={toggleComplete}
     todo={todo}
     />
 ))}

            
        </ul>
    )
}
export default TodoList

import React from "react";
import { TodoListItem } from "./TodoListItem";
import {AddTodo,Todo,ToggleComplete,TodoListItemProps} from '../utils/type'

interface TodoListProps { 
    todos:Array<Todo>;
    toggleComplete: ToggleComplete
}
export const TodoList : React.FC < TodoListProps > = ( { todos , toggleComplete } ) =>{
    return(
        <ul>
 {todos.map(todo =>(
     <TodoListItem
     
     
     todo={todo}
     toggleComplete={toggleComplete}
     />
 ))}

            
        </ul>
    )
}
export default TodoList

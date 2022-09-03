import React from "react";
import { TodoListItem } from "./TodoListItem";
import {AddTodo,Todo,ToggleComplete,TodoListItemProps,ToggleDelete} from '../utils/type'
import styled from 'styled-components'

const Container3 = styled.div`
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
interface TodoListProps { 
    todos:Array<Todo>;
    toggleComplete: ToggleComplete
    toggleDelete: ToggleDelete
}
export const TodoList : React.FC < TodoListProps > = ( { todos , toggleComplete , toggleDelete} ) =>{
    return(
        <Container3>

        <ul>
            <label style={{color:"white"}}>

 {todos.map(todo =>(
     <TodoListItem
     
     toggleDelete={toggleDelete}
     toggleComplete={toggleComplete}
     todo={todo}
     />
     ))}
     </label>   
        </ul>
     </Container3>
    )
}
export default TodoList

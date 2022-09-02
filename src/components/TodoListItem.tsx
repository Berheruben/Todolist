import React from "react";
import { TodoListItemProps } from "../utils/type";
import styled from "styled-components";
import {AddTodo,Todo,ToggleComplete,TodoFormProps} from '../utils/type'

const Label = styled.label`

`;

export const TodoListItem:React.FC<TodoListItemProps> = ({todo, toggleComplete}) =>{
    return(
        <li>
            <Label className={todo.complete ? "completed" : "todo-row"}>
                <input type="checkbox" checked={todo.complete} onChange={()=>toggleComplete(todo)}/>
                {todo.text}

            </Label>
        </li>
    )
}

export default TodoListItem;
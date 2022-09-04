import React from "react"
import { TodoListItem } from "./TodoListItem"
import { Todo, ToggleComplete, ToggleDelete } from '../types/types'
import styled from 'styled-components'

const Container = styled.div`
padding: 3vw 1vw;
background: #242424;
border-radius: 32px;
`;

const Title = styled.h1`
margin:33px;
width: 1312px;
height: 65px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 54px;
line-height: 65px;
color: #FFFFFF;
`;

interface TodoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete
    toggleDelete: ToggleDelete
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleComplete,
    toggleDelete
}) => {
    return (
        <Container>
            <Title>TODOS</Title>
            <div style={{}}>
                {todos.map(todo => (
                    <TodoListItem
                        toggleDelete={toggleDelete}
                        toggleComplete={toggleComplete}
                        todo={todo}
                    />
                ))}
            </div>
        </Container>
    )
}
export default TodoList

import React from "react"
import { TodoListItemProps } from "../types/types"
import styled from "styled-components"
import Bin from '../image/Bin.svg'

const Label = styled.label`
width: 1168px;
height: 38px;
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 160%;
color: #FFFFFF;
margin: 10px;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 1312px;
height: 50px;
align-items:center;
order: 0;
align-self: stretch;
flex-grow: 0;
max-height: 50vh;
overflow-y: scroll;
`;

const Binimg = styled.img`
height: 33.33333206176758px;
width: 33.33333206176758px;
left: 3.3333740234375px;
top: 3.33331298828125px;
border-radius: 0px;
`;
const Binbtn = styled.button`
width: 47px;
height: 41px;
background: #242424;
padding: 0px;
flex: none;
order: 0;
flex-grow: 0;
border: none;
`;


const Check = styled.input`
padding: 10px;
height: 35px;
font-size: 110%;
display: inline;
`;
const Todo = styled.div`
align-items: center;
display: flex;
flex-direction: row;
margin-bottom: 16px;
transition: all .3s ease-in-out;
`
export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo,
    toggleComplete,
    toggleDelete
}) => {
    return (
        <Container>
            <Todo>
                <Binbtn
                    type="button"
                    onClick={() => toggleDelete(todo)}
                >
                    <Binimg src={Bin} />
                </Binbtn>
                <Check
                    type="checkbox"
                    checked={todo.complete}
                    onClick={() => toggleComplete(todo)}
                />
                <Label className={todo.complete ? "completed" : "todo-row"} >
                    {todo.text}
                </Label>
            </Todo>
        </Container>
    )
}

export default TodoListItem;
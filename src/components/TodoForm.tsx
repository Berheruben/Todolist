import React, { ChangeEvent, useState, FormEvent } from 'react'
import {AddTodo,Todo,ToggleComplete,TodoFormProps} from '../utils/type'
import styled from 'styled-components'

const Modale= styled.div`
   padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  `;
  const Overlay= styled.div`
   width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49,49,49,0.8);
  `;
  const Modalcontent= styled.div`
  position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
  `;
const Closemodal = styled.button`
 position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;
const Btn = styled.button`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 32px;

gap: 8px;

width: 126px;
height: 54px;

background: #716FB2;
/* Main */

box-shadow: 4px 12px 24px rgba(0, 0, 0, 0.25);
border-radius: 32px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;
const Form=styled.form`

`;
const C1=styled.div`
`;
const C2=styled.div`
`;
const C3=styled.div`
`;
const H1= styled.h1`

`;
const C4=styled.div`
`;
const Ul=styled.ul`
`;

export const TodoForm: React.FC<TodoFormProps> = ({addTodo})=>{

    const[newTodo,setNewTodo] = useState<string>("")
const handleChange = (e: ChangeEvent <HTMLInputElement>)=>{
    setNewTodo(e.target.value)
}
const handlesubmit = (e:FormEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
}
const [modal, setModal] = useState(false);


  const toggleModal = () => {
    setModal(!modal);
  };
    return(
        <>
<C1>
    <C2>
    <C3>
    <H1>titolo</H1>
    <C4>
<Ul id="List">
    
</Ul>
    </C4>
    </C3>        
    </C2>
    </C1>


       <button onClick={toggleModal}>
        nuova voce
      </button>
      {modal &&

          <Form>
              <Overlay onClick={toggleModal}></Overlay>
              <Modalcontent>
<input type="text" value={newTodo} className="todo-input" placeholder="inserisci una voce"onChange={handleChange}/>

<button type="submit" className="todo-button" onClick={handlesubmit}>nuova voce</button>
<Closemodal  onClick={toggleModal}>
              CLOSE
            </Closemodal>
              </Modalcontent>
        </Form>
        }
        </>
    )
}
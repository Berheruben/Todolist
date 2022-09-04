import React, { ChangeEvent, useState, FormEvent } from 'react'
import { TodoFormProps } from '../types/types'
import styled from 'styled-components'
import Adds from '../images/Adds.svg';
import { Button } from './Button';

const Overlay = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
right: 0;
bottom: 0;
position: fixed;
background: rgba(49,49,49,0.8);
  `;
const Modalcontent = styled.div`
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
background:#2f2f2f;
  `;
const AddsImage = styled.img`
width: 40px;
height: 40px;
flex: none;
order: 0;
flex-grow: 0;
`;

const Plus = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
const Label = styled.label`
width: 135px;
height: 38px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 160%;
color: #01001E;
flex: none;
order: 1;
flex-grow: 0;
`;
const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
position: absolute;
width: 509px;
height: 313px;
left: 505px;
top: 83px;
background: #1f1f1f;
border-radius: 24px;
`;

const Btnintotheform = styled.button`
display: flex;
border-color: transparent;
flex-direction: column;
align-items: flex-start;
padding: 8px 32px;
gap: 8px;
width: 126px;
height: 54px;
background: #716FB2;
box-shadow: 4px 12px 24px rgba(0, 0, 0, 0.25);
border-radius: 32px;
flex: none;
order: 1;
flex-grow: 0;
align-items: center;
justify-content: center;
`;
const Textarea = styled.textarea`
background: transparent;
border: 0;
color: #fff;
font-size: 24px;
font-style: normal;
font-weight: 300;
height: 155px;
outline: 0;
resize: none;
width: 430px;
border-color: Transparent;
`
const ButtonContainer = styled.div`
display: block; 
margin-left: auto; 
margin-right: auto; 
margin-top: 24px;
`

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [message, setMessage] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false)
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }
  const handlesubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(message)

    // reset local state
    setMessage('')

    // close modal
    setModal(false)
  }
  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <ButtonContainer>
        <Button onClick={toggleModal}>
          <Plus>
            <AddsImage src={Adds} />
            <Label>Nuova voce</Label>
          </Plus>
        </Button>
      </ButtonContainer>
      {modal &&
        <FormContainer>
          <Overlay onClick={toggleModal} />
          <Modalcontent>
            <Textarea value={message} onChange={handleChange} />
            <Btnintotheform type="submit" onClick={handlesubmit}>Salva</Btnintotheform>
          </Modalcontent>
        </FormContainer>
      }
    </>
  )
}

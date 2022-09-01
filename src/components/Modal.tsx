import React, { useState } from "react";
import styled from "styled-components";

const Modal= styled.div`
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

export default function Modale() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        nuova voce
      </button>

      {modal && (
        <Modal>
          <Overlay onClick={toggleModal}></Overlay>
          <Modalcontent>
           <Form id="Form">
            <input type="text" placeholder="inserisci una voce" id="Task"/>
            <Btn type="submit"></Btn>
            </Form>
            <Closemodal  onClick={toggleModal}>
              CLOSE
            </Closemodal>
          </Modalcontent>
        </Modal>
      )}
      
    </>
  );
}
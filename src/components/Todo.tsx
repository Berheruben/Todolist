import React from 'react'
import styled from 'styled-components';
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
const Todo = () => {

  return (
    <C1>Todo
    <C2>
    <C3>
    <H1>titolo</H1>
    <C4>
<Ul id="List">
    <input type="button" id="list"/>
    <input type="checkbox" />
    <label id="Label">prova</label>
</Ul>
    </C4>
    </C3>        
    </C2>
    </C1>
  )
}

export default Todo
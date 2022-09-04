import styled from "styled-components"

type ButtonProps = {
    onClick: () => void,
    children: any,
}
export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
}) => {
    return (
        <div onClick={onClick}>
            <StyledButton>
                {children}
            </StyledButton>
        </div>
    )
}

const StyledButton = styled.button`
border-color: transparent; 
display: flex;
justify-content: center;
align-items: center;
padding: 16px 32px;
gap: 8px;
width: 263px;
height: 72px;
background: #716FB2;
border-radius: 32px;
`;

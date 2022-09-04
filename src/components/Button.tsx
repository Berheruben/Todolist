import styled from "styled-components"

enum ButtonType {
    large = 'large',
    medium = 'medium',
    small = 'small'
}

type ButtonProps = {
    onClick: () => void,
    children: any,
    buttonType?: ButtonType
}

const styles = {
    [ButtonType.large]: {

    },
    [ButtonType.medium]: {

    },
    [ButtonType.small]: {
        fontSize: '21px'
    }
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    buttonType = ButtonType.medium
}) => {
    // select additional style
    const style = styles[buttonType]

    return (
        <div onClick={onClick}>
            <StyledButton style={style}>
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

import { ButtonHTMLAttributes } from "react"
import { styled } from "styled-components";

const StyledButton = styled.button<{ buttonStyle: ButtonStyle }>`
    background-color: #ffffff;
    color: ${props => props.buttonStyle === 'primary' ? "#b162b1" : props.buttonStyle === 'secondary' ? '#ad2142' : 'black'};
    font-size: 0.875rem; 
    padding: 0.625rem 3.75rem; 
    margin-top: 1rem;
    cursor: pointer; 
    font-family: 'Roboto', sans-serif; 
    border: ${props => props.buttonStyle === 'primary' ? "2px solid #b162b1" : props.buttonStyle === 'secondary' ? '2px solid #ad2142' : '2px solid #b162b1'};
    
    &:hover{
        background-color: #d7b6d7;
    }

    transition: .2s background-color ease-in-out;
`;

export type ButtonStyle = 'primary' | 'secondary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /** This is content that has to be included with each button */
    content: string;
    /** This prop is for the button style (primary or secondary). The ? means it's optional. Default is primary */
    buttonStyle?: ButtonStyle;
}

/**
 * This is a button component that has to have some content but doesn't do anything else yet.
 * @param {ButtonProps} props 
 * @returns 
 */
export const Button = (props: ButtonProps) => {
    const { content, buttonStyle = 'primary' } = props;
    return <StyledButton {...props} buttonStyle={buttonStyle}>{content}</StyledButton>
}
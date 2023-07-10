import { ButtonHTMLAttributes } from "react"
import { styled } from "styled-components";

const StyledButton = styled.button`
    background-color: red;
    margin-top: 1rem;
`;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /** This is content that has to be included with each button */
    content: string;
}

/**
 * This is a button component that has to have some content but doesn't do anything else yet.
 * @param {ButtonProps} props 
 * @returns 
 */
export function Button(props: ButtonProps) {
    const { content } = props;
    return <StyledButton {...props}>{content}</StyledButton>
}
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
   color:orange;
`;

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
}


export const Input = (props: InputProps) => {
    return <StyledInput {...props} ></StyledInput>
}
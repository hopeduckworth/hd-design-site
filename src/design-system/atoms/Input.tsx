import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: white;
  border: 2px solid gray;
  background-color: #d7b6d7;
  padding: 0.25rem 0.5rem;
  outline: none;

  &:focus {
    border: 2px solid lightgray;
  }
`;

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input = (props: InputProps) => {
  return <StyledInput {...props}></StyledInput>;
};

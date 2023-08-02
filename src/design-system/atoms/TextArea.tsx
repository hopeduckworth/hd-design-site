import { TextareaHTMLAttributes } from "react"
import styled from "styled-components";

const StyledTextArea = styled.textarea`
   color:#553d4f;
`;

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
}

export const TextArea = (props: TextAreaProps) => {
    return <StyledTextArea {...props} ></StyledTextArea>
}
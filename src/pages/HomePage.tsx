import styled from "styled-components"
import { H1 } from "../design-system/atoms/Text"
import { colors } from "../colors"

const ReadabilityBox = styled.div`
    background-color: white;
    opacity: 30%;
    padding: 2rem 2rem;
    ;
`


export const HomePage = () => {
    return (
    <ReadabilityBox>
    <H1>Hope Duckworth Design</H1>
    </ReadabilityBox>
    )
}
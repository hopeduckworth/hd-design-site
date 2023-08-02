import { Link } from "react-router-dom"
import { routes } from "../routes"
import { styled } from "styled-components"

const StyledLink = styled(Link)``

export const MainPage = () => {
    return (
        <>
            <h1>This is the Main Page</h1>
            <StyledLink to={routes.about}>About Page</StyledLink>
        </>
    )
}
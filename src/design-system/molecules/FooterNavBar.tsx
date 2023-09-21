import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import { colors } from "../../colors";
import { CircleLogo } from "../atoms/CircleLogo";
import { mediaQuery } from "../layout/mediaQueries";

const OuterContainer = styled.div`
    display: flex-end;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 4rem;
    box-sizing: border-box;
    background-color: ${colors.stoneGray}CC; // 80% opacity: ;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${mediaQuery.medium} {
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
`
const NavItem = styled.li`
    margin-left: 1.5rem;
   
`
const StyledLink = styled(Link)`
    font-family: 'Roboto', sans-serif;
    color: white;
    &:visited{
        color: white;
    }
    &:hover{
        color: #dfdfdf;
        font-weight: bold;
    }

    transition: .2s all ease-in-out;
`

export const FooterNavBar = () => {
    return (
        <OuterContainer>
            <InnerContainer>
                <CircleLogo size='40px' />
                <NavItems>
                    <NavItem><StyledLink to={routes.home}>Home</StyledLink></NavItem>
                    <NavItem><StyledLink to={routes.about}>About</StyledLink></NavItem>
                    <NavItem><StyledLink to={routes.projects}>Projects</StyledLink></NavItem>
                    <NavItem><StyledLink to={routes.info}>Info</StyledLink></NavItem>
                    <NavItem><StyledLink to={routes.pricing}>Pricing</StyledLink></NavItem>

                </NavItems>
            </InnerContainer>
        </OuterContainer>
    );
};
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import { link } from "fs";

const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 4rem;
    box-sizing: border-box;
    background-color: #D1AAD2;
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Logo = styled.div`
    width: 92px;
    height: 92px;
    background-color: white;
    border-radius: 1000px;    
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

export const TopNavBar = () => {
    return (
        <OuterContainer>
            <InnerContainer>
                <Logo />
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
import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { TopNavBar } from "../design-system/molecules/TopNavBar";
import { useEffect } from "react";
import { routes } from "../routes";
import backgroundImage from "../assets/main_background.jpg";
import { colors } from "../colors";

const PageWrapper = styled.div`
  padding: 1rem;
`;

const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  opacity: 30%;
  filter: blur(1px);
  -webkit-filter: blur(1px);

`;
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const InnerContainer = styled.div`
  max-width: 60rem;
`;



export const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(routes.home);
  }, []);

  return (
    <>
      <Background src={backgroundImage} />
      <TopNavBar />
      <PageWrapper>
        <OuterContainer>
          <InnerContainer>
            <Outlet />
          </InnerContainer>
        </OuterContainer>
      </PageWrapper>
    </>
  );
};

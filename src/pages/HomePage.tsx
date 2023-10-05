import styled from "styled-components";
import { H1, H3 } from "../design-system/atoms/Text";
import { colors } from "../colors";
import { PiCaretDownLight } from "react-icons/pi";
import { FaHorse } from "react-icons/fa";
import { IconWrapper } from "../design-system/atoms/IconWrapper";

// const ReadabilityBox = styled.div`
//     background-color: white;
//     opacity: 30%;
//     padding: 2rem 2rem;
//     ;
// `

export const HomePage = () => {
  return (
    <>
      <H1>Hope Duckworth Design</H1>
      <H3 style={{ textAlign: "center", marginTop: "3rem" }}>Web Designer</H3>
      <PiCaretDownLight />
      <IconWrapper size="2rem" color={colors.darkViolet}>
        <FaHorse />
      </IconWrapper>
    </>
  );
};

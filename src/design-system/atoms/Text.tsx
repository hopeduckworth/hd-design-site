import styled, { css } from "styled-components";
import { colors } from "../../colors";
import { mediaQuery } from "../layout/mediaQueries";

const headerProps = css`
  margin: 0;
  font-family: "Roboto Slab", serif;
`;

/** A styled h1 component */
export const H1 = styled.h1`
  ${headerProps}
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  line-height: 120%;
  color: ${colors.text.charcoalgray};
  ${mediaQuery.small} {
    font-size: 3.5rem;
  }
  ${mediaQuery.medium} {
    font-size: 4rem;
  }
  ${mediaQuery.large} {
    font-size: 5rem;
  }
  ${mediaQuery.xLarge} {
    font-size: 6rem;
  }
`;

/** A styled h2 component */
export const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 110%;
  color: ${colors.text.charcoalgray};
  margin: 0;
  ${mediaQuery.small} {
    font-size: 3rem;
  }
  ${mediaQuery.medium} {
    font-size: 4rem;
  }
  ${mediaQuery.large} {
    font-size: 5rem;
  }
  ${mediaQuery.xLarge} {
    font-size: 6rem;
  }
`;
/** A styled h3 component */
export const H3 = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 2rem;
  line-height: 100%;
  color: ${colors.text.charcoalgray};
  margin: 0;
  ${mediaQuery.small} {
    font-size: 2rem;
  }
  ${mediaQuery.medium} {
    font-size: 2.5rem;
  }
  ${mediaQuery.large} {
    font-size: 3rem;
  }
  ${mediaQuery.xLarge} {
    font-size: 4rem;
  }
`;
/** A styled h4 component */
export const H4 = styled.h4`
  font-style: normal;
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 100%;
  color: ${colors.text.charcoalgray};
  margin: 0;
  ${mediaQuery.small} {
    font-size: 3rem;
  }
  ${mediaQuery.medium} {
    font-size: 3.5rem;
  }
  ${mediaQuery.large} {
    font-size: 4rem;
  }
  ${mediaQuery.xLarge} {
    font-size: 4.5rem;
  }
`;
/** A styled h5 component */
export const H5 = styled.h5`
  font-style: normal;
  font-weight: 200;
  font-size: 1.5rem;
  line-height: 100%;
  color: ${colors.text.darkgray};
  margin: 0;
  ${mediaQuery.small} {
    font-size: 1.5rem;
  }
  ${mediaQuery.medium} {
    font-size: 2rem;
  }
  ${mediaQuery.large} {
    font-size: 2.5rem;
  }
  ${mediaQuery.xLarge} {
    font-size: 3rem;
  }
`;
/** A styled h6 component */
export const H6 = styled.h6`
  font-style: normal;
  font-weight: 200;
  font-size: 1.5rem;
  line-height: 100%;
  color: ${colors.text.charcoalgray};
  margin: 0;
  ${mediaQuery.small} {
    font-size: 1.5rem;
  }
  ${mediaQuery.medium} {
    font-size: 1.87rem;
  }
  ${mediaQuery.large} {
    font-size: 1.87rem;
  }
  ${mediaQuery.xLarge} {
    font-size: 2rem;
  }
`;
/** A styled body component. Is a p tag under the hood. */
export const Body = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 100%;
  color: ${colors.text.charcoalgray};
  margin: 0;
`;
/** A styled body component for smaller than normal text. Is a p tag under the hood */
export const SmallBody = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 0.75rem;
  line-height: 100%;
  color: ${colors.text.charcoalgray};
  margin: 0;
`;

//Change header text to Roboto Slab

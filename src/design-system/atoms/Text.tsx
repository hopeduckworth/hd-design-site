import styled, { css } from "styled-components";
import { colors } from "../../colors";

const headerProps = css`
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
`


/** A styled h1 component */
export const H1 = styled.h1`
    ${headerProps}
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 120%;
    color: ${colors.text.charcoalgray};
`;

/** A styled h2 component */
export const H2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 6rem;
    line-height: 110%;
    color: ${colors.text.charcoalgray};
    margin: 0;

`;
/** A styled h3 component */
export const H3 = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 100%;
    color: ${colors.text.charcoalgray};
    margin: 0;

`;
/** A styled h4 component */
export const H4 = styled.h4`
    font-style: normal;
    font-weight: 300;
    font-size: 3rem;
    line-height: 100%;
    color: ${colors.text.charcoalgray};
    margin: 0;

`;
/** A styled h5 component */
export const H5 = styled.h5`
    font-style: normal;
    font-weight: 200;
    font-size: 2rem;
    line-height: 100%;
    color: ${colors.text.darkgray};
    margin: 0;

`;
/** A styled h6 component */
export const H6 = styled.h6`
    font-style: normal;
    font-weight: 200;
    font-size: 1.87rem;
    line-height: 100%;
    color: ${colors.text.charcoalgray};
    margin: 0;

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
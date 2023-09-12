/**
 * Provide an ultra-specific typing for breakpoint sizes so there is no ambiguity.
 */
export type Breakpoints = {
  readonly xSmall: 320;
  readonly small: 576;
  readonly medium: 767;
  readonly large: 992;
  readonly xLarge: 1312;
  readonly max: 1584;
};

/**
 * All breakpoints (in px) that designs are based off of. Corresponds to the width of the user's viewport.
 */
export const breakpoints: Breakpoints = {
  xSmall: 320,
  small: 576,
  medium: 767,
  large: 992,
  xLarge: 1312,
  max: 1584,
};

export type BreakpointName = keyof Breakpoints;

export type BreakpointValue = Breakpoints[BreakpointName];

const queryTemplate = (size: BreakpointValue) =>
  `@media only screen and (min-width: ${size}px)`;

/**
 * Media queries to be used for viewport width specific rendering.
 * Note that these use a mobile first approach (base styles apply to mobile, as viewport widens, styles will be applied as each breakpoint is hit overriding whatever styles exist for smaller resolution.)
 * @example
 * const MyContainer = styled.div`
 *   background: blue;
 *
 *   ${mediaQuery.small} {
 *     background: red;
 *   }
 *
 *   ${mediaQuery.large} {
 *     background: orange;
 *   }
 * `
 * // background will be blue from the smallest screen size until the viewport width hits small,
 * // then the background will turn red.  Once the viewport hits large it will turn orange and
 * // will remain orange no matter how wide the viewport gets since no bigger size is used.
 */

export const mediaQuery = {
  xSmall: queryTemplate(breakpoints.xSmall),
  small: queryTemplate(breakpoints.small),
  medium: queryTemplate(breakpoints.medium),
  large: queryTemplate(breakpoints.large),
  xLarge: queryTemplate(breakpoints.xLarge),
  max: queryTemplate(breakpoints.max),
};

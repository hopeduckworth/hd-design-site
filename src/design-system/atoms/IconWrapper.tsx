import { PropsWithChildren } from "react";
import { IconContext } from "react-icons";
import { colors } from "../../colors";

export type IconWrapperProps = PropsWithChildren<{
    /** The size of the icon to be rendered. If not provided, 1rem will be used */
  size?: string;
  /** The color of the icon to be rendered. If not provided, colors.cloudGray will be used */
  color?: string;
}>;

/**
 * Wraps an icon component. This will control size and color of an icon. To use, wrap your icon component with this wrapper component
 * 
 * @example
 * import { PiCaretDownLight } from "react-icons/pi";
 * 
 * const MyComponent = () => {
 *  return (
 *   <IconWrapper size="3rem" color="orange">
 *    <PiCaretDownLight />
 *   </IconWrapper> 
 *  )
 * }
 * @param props 
 * @returns 
 */
export const IconWrapper = (props: IconWrapperProps) => {
  const { size = '1rem', color = colors.cloudGray, children } = props;
  return (
    <IconContext.Provider value={{ color, size }}>
      {children}
    </IconContext.Provider>
  );
};

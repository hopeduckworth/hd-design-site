import { Meta, StoryFn } from "@storybook/react";
import {
  IconWrapper,
  IconWrapperProps,
} from "../design-system/atoms/IconWrapper";
import { colors } from "../colors";
import { FaHorse } from "react-icons/fa";

export default {
  title: "Design System/Atoms/Icon Wrapper",
  component: IconWrapper,
} as Meta;

export const IconWrapperStory: StoryFn<IconWrapperProps> = (
  args: IconWrapperProps
) => (
  <IconWrapper {...args}>
    <FaHorse />
  </IconWrapper>
);
IconWrapperStory.args = {
  size: "2rem",
  color: colors.darkViolet,
};

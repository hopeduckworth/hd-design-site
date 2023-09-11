import { Meta, StoryFn } from "@storybook/react";
import { CircleLogo, CircleLogoProps } from "../design-system/atoms/CircleLogo";

export default {
    title: "Design System/Atoms/Circle Logo",
    component: CircleLogo
} as Meta;

export const CircleLogoStory: StoryFn<CircleLogoProps> = (args: CircleLogoProps) => <CircleLogo {...args} />
CircleLogoStory.args = {
    size: '20rem',
}
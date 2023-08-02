import { Meta } from "@storybook/react";
import { Input, InputProps } from "../design-system/atoms/Input";

export default {
    title: "Design System/Atoms/Input Story",
    component: Input
} as Meta;

export const InputStory = (args: InputProps) => <Input {...args} />
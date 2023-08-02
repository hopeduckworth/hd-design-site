import { Meta } from "@storybook/react";
import { TextArea, TextAreaProps } from "../design-system/atoms/TextArea";

export default {
    title: "Design System/Atoms/Text Area Story",
    component: TextArea
} as Meta;

export const TextAreaStory = (args: TextAreaProps) => <TextArea {...args} />
import { Meta } from "@storybook/react";
import { Button, ButtonProps } from "../design-system/atoms/Button";
import { action } from "@storybook/addon-actions";

export default {
    title: "Design System/Atoms/Button Story",
    component: Button
} as Meta;

export const ButtonStory = (args: ButtonProps) => <Button {...args} />
ButtonStory.args = {
    content: "Click me!",
    buttonStyle: "primary",
    onClick: action("Button clicked!"),
}
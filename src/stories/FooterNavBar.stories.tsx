import { Meta } from "@storybook/react";
import { FooterNavBar } from "../design-system/molecules/FooterNavBar";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Design System/Atoms/FooterNavBar Story",
    component: FooterNavBar
} as Meta;

export const FooterNavBarStory = () =>
    <BrowserRouter>
        <FooterNavBar />
    </BrowserRouter>
import { Meta } from "@storybook/react";
import { TopNavBar } from "../design-system/molecules/TopNavBar";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Design System/Atoms/TopNavBar Story",
    component: TopNavBar
} as Meta;

export const TopNavBarStory = () =>
    <BrowserRouter>
        <TopNavBar />
    </BrowserRouter>
import { Meta, StoryFn } from "@storybook/react";
import { ImageCard, ImageCardProps } from "../design-system/atoms/ImageCard";

export default {
    title: "Design System/Atoms/Image Card Story",
    component: ImageCard
} as Meta;

export const ImageCardStory: StoryFn<ImageCardProps> = (args: ImageCardProps) => <ImageCard {...args} />
ImageCardStory.args = {
    size: '20rem',
    imageSrc: 'https://fastly.picsum.photos/id/206/536/354.jpg?hmac=_px0yEGtDV78df7K1ksq3yrYRyBd3Z4N4nVHxwp4jg8',
    altTag: 'example alt tag'
}
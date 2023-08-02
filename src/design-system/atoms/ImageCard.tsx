import { styled } from "styled-components"

const Image = styled.img<{ size: string }>`
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: 0.5rem;
`;

export type ImageCardProps = {
    /** This prop sets the size of the Image Card.  It's a string so you can set the size in px, rems, etc. */
    size: string
    /** This prop requires an image source for the Image Card */
    imageSrc: string
    /** This prop enables you to set an alt tag (good for SEO for example) */
    altTag: string
}

export const ImageCard = (props: ImageCardProps) => {
    const { size, imageSrc, altTag } = props;

    return (
        <Image size={size} src={imageSrc} alt={altTag} />
    )
}
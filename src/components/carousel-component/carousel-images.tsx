import { memo } from "react";
import { ISlideImages } from "./types";
import { StyledImagesContainer, StyledImage } from './styles'

interface IImagesProps {
    SliderData: ISlideImages[];
    currentImg: number;
}

export const CarouselImages = memo((props: IImagesProps) => {

    const { SliderData, currentImg } = props;

    if (SliderData.length <= 0 || !Array.isArray(SliderData)) {
        return null;
    }

    return (
        SliderData.map(({ image }, index) => {
            return <StyledImagesContainer key={index} >
                {currentImg === index && <StyledImage src={image} alt="Image" />}
            </StyledImagesContainer>
        })
    );
});

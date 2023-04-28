import { memo, useCallback } from "react";
import { ISlideImages } from "./types";
import { StyledImagesContainer, StyledImage, DotIndication, CarouselDotsImageWrapper, DotsWrapper, StyledSpan } from './styles';
import './style.css';

interface IImagesProps {
    SliderData: ISlideImages[];
    currentImg: number;
    autoplay: () => void;
    nevigationType: string;
    dotsSlider: (index: number) => void;
}

export const CarouselImages = memo((props: IImagesProps) => {

    const { SliderData, currentImg, autoplay, nevigationType, dotsSlider } = props;

    if (SliderData.length <= 0 || !Array.isArray(SliderData)) {
        return null;
    }

    const dotsIndicator = useCallback(() => {
        return SliderData.map(({ image }, index) => {
            return <StyledSpan key={index} onClick={() => dotsSlider(index)} >
                <DotIndication></DotIndication>
            </StyledSpan>
        })

    }, [SliderData, dotsSlider])

    return <CarouselDotsImageWrapper>
        {
            SliderData.map(({ image }, index) => {
                return (
                    currentImg === index &&
                    <StyledImagesContainer key={index}
                        onChange={() => autoplay()}>
                        <StyledImage src={image} alt="Image" />
                    </StyledImagesContainer>)
            })
        }
        <DotsWrapper >
            {
                nevigationType === 'dots' ? dotsIndicator() : null
            }
        </DotsWrapper>
    </CarouselDotsImageWrapper>


});

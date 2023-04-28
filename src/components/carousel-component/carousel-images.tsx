import { memo, useCallback } from "react";
import { ISlideImages } from "./types";
import { StyledImagesContainer, StyledImage, DotIndication, CarouselDotsImageWrapper } from './styles';
import './style.css';

interface IImagesProps {
    SliderData: ISlideImages[];
    currentImg: number;
    autoplay: () => any;
    nevigationType: string
}

export const CarouselImages = memo((props: IImagesProps) => {

    const { SliderData, currentImg, autoplay, nevigationType } = props;

    if (SliderData.length <= 0 || !Array.isArray(SliderData)) {
        return null;
    }

    const dotsIndicator = useCallback(() => {
        return (SliderData.map((index) => {
            return <DotIndication />
        })
        )
    }, [SliderData])

    return <CarouselDotsImageWrapper>
        {
            SliderData.map(({ image }, index) => {
                return (currentImg === index && <StyledImagesContainer key={index} onChange={autoplay()}>
                    <StyledImage src={image} alt="Image" />
                </StyledImagesContainer>)
            })
        }
        <div className='dots-indicator'>
            {
                nevigationType === 'dots' ? dotsIndicator() : null
            }
        </div>
    </CarouselDotsImageWrapper>


});

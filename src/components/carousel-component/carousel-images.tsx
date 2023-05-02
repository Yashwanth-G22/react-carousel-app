import { memo, useCallback } from "react";
import { ISlideImages } from "./types";
import { StyledImagesContainer, 
        StyledImage, DotIndication, 
        CarouselDotsImageWrapper,
         DotsWrapper, StyledSpan } from './styles';
import './style.css';

interface IImagesProps {
    SliderData: ISlideImages[];
    currentImg: number;
    nevigationType: string;
    dotsSlider: (index: number) => void;
    multiMedia: string;
}

export const CarouselImages = memo((props: IImagesProps) => {

    const { SliderData, currentImg, nevigationType, dotsSlider, multiMedia } = props;


    const dotsIndicator = useCallback(() => {
        return SliderData.map(({ image }, index) => {
            return <StyledSpan key={image} onClick={() => dotsSlider(index)} >
                <DotIndication></DotIndication>
            </StyledSpan>
        })

    }, [SliderData, dotsSlider])

    if (SliderData.length <= 0 || !Array.isArray(SliderData)) {
        return null;
    }

    return <CarouselDotsImageWrapper>
        {
            <StyledImagesContainer >
                {
                    multiMedia === 'image' ?
                        <StyledImage src={SliderData[currentImg].image} alt="Image" />
                        :
                        multiMedia === 'text' ?
                            <h1>text</h1>
                            :
                            <video src={SliderData[currentImg].image}></video>
                }
            </StyledImagesContainer>

        }
        <DotsWrapper >
            {
                nevigationType === 'dots' ? dotsIndicator() : null
            }
        </DotsWrapper>
    </CarouselDotsImageWrapper>


});

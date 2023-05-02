import { memo, useCallback } from "react";
import { ISlideImages } from "./types";
import { StyledImage, DotIndication,
        CarouselDotsImageWrapper,
        DotsWrapper, StyledSpan, 
        StyledTextTag, StyledMutliMediaContainer
} from './styles';
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
        return SliderData.map(({ data }, index) => {
            return <StyledSpan key={data} onClick={() => 
            dotsSlider(index)} >
                <DotIndication></DotIndication>
            </StyledSpan>
        })

    }, [SliderData, dotsSlider])

    if (SliderData.length <= 0 || !Array.isArray(SliderData)) {
        return null;
    }

    return <CarouselDotsImageWrapper>
        {
            <StyledMutliMediaContainer >
                {
                    multiMedia === 'image' ?
                        <StyledImage src={SliderData[currentImg].data} alt="Image" />
                        :
                        multiMedia === 'text' ?
                            <StyledTextTag>{SliderData[currentImg].data}</StyledTextTag>
                            :
                            <video width={'100%'} height={'100%'} controls autoPlay src={SliderData[currentImg].data}></video>
                }
            </StyledMutliMediaContainer>

        }
        <DotsWrapper >
            {
                nevigationType === 'dots' ? dotsIndicator() : null
            }
        </DotsWrapper>
    </CarouselDotsImageWrapper>


});

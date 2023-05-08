import { memo, useCallback } from 'react';
import {
    StyledImage,
    DotsWrapper, StyledTextTag,
    StyledMutliMediaContainer,
    CarouselMultiMediaWrapper,
    DotIndication, StyledVideo
} from './styles';
import { IMediaProps } from './types';

export const CarouselMedia = memo((props: IMediaProps) => {

    const { sliderData, currentMedia, nevigationType,
        dotCallbackFunction, orientation, verticalIndicatorPosition,
        aspectRatioForImage, styledTextAlign } = props;

    const dotsContainer = useCallback(() => {
        return sliderData.map(({ data }, index) =>
            <DotIndication key={data} onClick={() => dotCallbackFunction(index)}
                currentMedia={currentMedia} index={index} />
        );
    }, [sliderData, currentMedia, dotCallbackFunction])

    const mediaContainer = useCallback(() => {
        const checkSliderData = sliderData[currentMedia - 1].data
        if (checkSliderData.endsWith('.jpg') || checkSliderData.endsWith('.png') || checkSliderData.endsWith('.gif')) {
            styledTextAlign(false)
            return <StyledImage key={checkSliderData} src={checkSliderData} alt='Image' />
        }
        else if (checkSliderData.endsWith('.mp4') || checkSliderData.endsWith('.mpv')) {
            styledTextAlign(false)
            return <StyledVideo key={checkSliderData} controls autoPlay
                src={checkSliderData}></StyledVideo>
        }
        else if ((typeof (checkSliderData) === 'string')) {
            styledTextAlign(true)
            return <StyledTextTag key={checkSliderData}>{checkSliderData}</StyledTextTag>
        }
    }, [sliderData, currentMedia, styledTextAlign])

    if (sliderData.length <= 0 || !Array.isArray(sliderData)) {
        return null;
    }

    return <CarouselMultiMediaWrapper orientation={orientation} side={verticalIndicatorPosition}>
        <StyledMutliMediaContainer aspectRatioForImage={aspectRatioForImage} >
            <>{mediaContainer()}</>
        </StyledMutliMediaContainer>
        <DotsWrapper orientation={orientation}>
            {
                nevigationType === 'dots' ? dotsContainer() : null
            }
        </DotsWrapper>
    </CarouselMultiMediaWrapper>
});

import { memo, useCallback } from 'react';
import {
    StyledImage,
    DotsWrapper, StyledTextTag,
    StyledMutliMediaContainer,
    CarouselMultiMediaWrapper,
    DotIndication
} from './styles';
import { IMediaProps } from './types';



export const CarouselMedia = memo((props: IMediaProps) => {

    const { SliderData, currentMedia, nevigationType,
        dotCallbackFunction, orientation, verticalIndicatorPosition,
        aspectRatioForImage, styledTextAlign } = props;

    const dotsContainer = useCallback(() => {
        return SliderData.map(({ data }, index) =>
            <DotIndication key={data} onClick={() => dotCallbackFunction(index)}
                currentMedia={currentMedia} index={index} />
        );
    }, [SliderData, currentMedia, dotCallbackFunction])

    const mediaContainer = useCallback(() => {
        const checkData = SliderData[currentMedia - 1].data
        if (checkData.endsWith('.jpg') || checkData.endsWith('.png') || checkData.endsWith('.gif')) {
            styledTextAlign(false)
            return <StyledImage src={checkData} alt='Image' />
        }
        else if (checkData.endsWith('.mp4') || checkData.endsWith('mpv')) {
            styledTextAlign(false)
            return <video width={400} height={400} controls autoPlay
                src={checkData}></video>
        }
        else if ((typeof (checkData) === 'string')) {
            styledTextAlign(true)
            return <StyledTextTag>{checkData}</StyledTextTag>
        }
        else return undefined;
    }, [SliderData, currentMedia, styledTextAlign])

    if (SliderData.length <= 0 || !Array.isArray(SliderData)) {
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

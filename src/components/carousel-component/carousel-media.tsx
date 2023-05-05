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
        dotsSlider, orientation, verticalIndicatorPosition,
        aspectRatioForImage } = props;

    const dotsContainer = useCallback(() => {
        return SliderData.map(({ data }, index) =>
            <DotIndication key={data} onClick={() => dotsSlider(index)}
                currentMedia={currentMedia} index={index} />
        );
    }, [SliderData, currentMedia, dotsSlider])

    const mediaContainer = useCallback(() => {
        const checkData = SliderData[currentMedia - 1].data
        if (checkData.endsWith('.jpg') || checkData.endsWith('.png') || checkData.endsWith('.gif')) {
            return <StyledImage src={checkData} alt='Image' />
        }
        else if (checkData.endsWith('.mp4')) {
            return <video width={400} height={400} controls autoPlay
                src={checkData}></video>
        }
        else if((typeof(checkData) === 'string')) {
            return <StyledTextTag>{checkData}</StyledTextTag>
        }
        else return undefined;
    }, [SliderData, currentMedia])

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

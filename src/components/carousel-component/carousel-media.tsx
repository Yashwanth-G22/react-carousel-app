import { memo, useCallback } from 'react';
import {
    StyledImage,
    DotsWrapper, StyledTextTag,
    StyledMutliMediaContainer,
    CarouselMultiMediaWrapper,
    DotIndication, StyledVideo
} from './styles';
import { IMediaProps } from './types';

const imageExtensions = ['.webp', '.svg', '.png', '.pjp', '.pjpeg', '.jfif', '.jpeg', '.jpg', '.gif', '.avif', '.apng'];

const videoExtensions = ['.mp4', '.m4p', '.m4v', '.mpv', '.mpe', '.mpeg', '.mp2', '.mpg'];

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

        const image = imageExtensions.find(elem => checkSliderData.endsWith(elem))

        const video = videoExtensions.find(elem => checkSliderData.endsWith(elem))

        if (checkSliderData.endsWith(image ? image : 'error')) {
            styledTextAlign(false)
            return <StyledImage key={checkSliderData} src={checkSliderData} alt='image' />
        }
        else if (checkSliderData.endsWith(video ? video : 'error')) {
            styledTextAlign(false)
            return <StyledVideo key={checkSliderData} controls autoPlay src={checkSliderData}></StyledVideo>
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

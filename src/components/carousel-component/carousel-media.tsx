import { memo, useCallback } from 'react';
import {
    StyledImage, DotIndication,
    CarouselDotsImageWrapper,
    DotsWrapper, StyledTextTag,
    StyledMutliMediaContainer
} from './styles';
import { IMediaProps } from './types';

export const CarouselMedia = memo((props: IMediaProps) => {

    const { SliderData, currentMedia, nevigationType,
        dotsSlider, multiMedia, orientation, verticalIndicatorPosition } = props;


    const dotsIndicator = useCallback(() => {
        return SliderData.map(({ data }, index) =>
            <DotIndication key={data} onClick={() => dotsSlider(index)}
                className={verticalIndicatorPosition === 'right' ? 'rightDots' : 'leftDots'} />
        );
    }, [SliderData, dotsSlider, verticalIndicatorPosition])

    if (SliderData.length <= 0 || !Array.isArray(SliderData)) {
        return null;
    }

    return <CarouselDotsImageWrapper className={orientation === 'horizontal' ? 'horizontal' : 'vertical'}>
        {
            <StyledMutliMediaContainer >
                {
                    multiMedia === 'image' ?
                        <StyledImage src={SliderData[currentMedia - 1].data} alt='Image' />
                        :
                        multiMedia === 'text' ?
                            <StyledTextTag>{SliderData[currentMedia - 1].data}</StyledTextTag>
                            :
                            <video width={400} height={400} controls autoPlay
                                src={SliderData[currentMedia - 1].data}></video>
                }
            </StyledMutliMediaContainer>

        }
        <DotsWrapper className={orientation === 'horizontal' ? 'horizontal-dots' : 'vertical-dots'}>
            {
                nevigationType === 'dots' ? dotsIndicator() : null
            }
        </DotsWrapper>
    </CarouselDotsImageWrapper>


});

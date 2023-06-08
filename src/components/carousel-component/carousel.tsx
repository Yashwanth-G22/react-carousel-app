import { FC, memo, useState, useCallback, useEffect } from 'react';
import { CarouselWrapper, CarouselDataWrapper } from './styles';
import { CarouselMedia } from './carousel-media';
import { ArrowButtons } from './arrow-buttons';
import { AllMixMedia } from './slider-data';
import { ICarouselProps } from './types';

export const Carousel: FC = memo(({
    autoplay = false,
    loop = false,
    timeRange = 3000,
    navigationType = 'arrow',
    orientation = 'horizontal',
    verticalIndicatorPosition = 'left',
    controlled = false,
    selectedId = 2,
    defaultSelection = false,
    StartsFromSecondSlide = false,
    aspectRatioForImage = false,
}: ICarouselProps) => {

    const [currentMedia, setCurrentMedia] = useState<number>(1);
    const [defaultMedia, setDefaultMedia] = useState<number>(2);
    const [alignText, setAlignText] = useState<boolean>(false)
    const dataLength = AllMixMedia.length;

    const nextSlide = useCallback(() => {
        setCurrentMedia(currentMedia === dataLength ? loop ? 1 : currentMedia : currentMedia + 1);
        setDefaultMedia(defaultMedia === dataLength ? defaultMedia : defaultMedia + 1);
    }, [currentMedia, dataLength, defaultMedia, loop])

    const prevSlide = useCallback(() => {
        setCurrentMedia(currentMedia === 1 ? loop ? dataLength : currentMedia : currentMedia - 1);
        setDefaultMedia(defaultMedia === 1 ? defaultMedia : defaultMedia - 1);
    }, [currentMedia, dataLength, defaultMedia, loop])

    const dotCallbackFunction = (index: number) => {
        setCurrentMedia(index + 1);
    };

    const alignTextCallback = (value: boolean) => {
        setAlignText(value);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (autoplay) {
            interval = setInterval(nextSlide, timeRange);
        }
        return () => clearInterval(interval);
    }, [autoplay, nextSlide, timeRange]);

    return (
        <CarouselWrapper>
            {
                navigationType === 'arrow' ?
                    <ArrowButtons nextSlide={nextSlide}
                        prevSlide={prevSlide}
                        loop={loop}
                        orientation={orientation}
                        verticalIndicatorPosition={verticalIndicatorPosition}
                        currentMedia={currentMedia}
                        dataLength={dataLength}
                        controlled={controlled}
                    />
                    : null
            }
            <CarouselDataWrapper text={alignText}>
                <CarouselMedia
                    sliderData={AllMixMedia}
                    currentMedia={controlled ? selectedId : StartsFromSecondSlide || defaultSelection ? defaultMedia : currentMedia}
                    navigationType={navigationType}
                    dotCallbackFunction={dotCallbackFunction}
                    orientation={orientation}
                    verticalIndicatorPosition={verticalIndicatorPosition}
                    aspectRatioForImage={aspectRatioForImage}
                    styledTextAlign={alignTextCallback} />
            </CarouselDataWrapper>
        </CarouselWrapper>
    );
});

import { FC, memo, useState, useCallback, useEffect } from 'react';
import { CarouselWrapper, CarouselImageWrapper } from './styles';
import { CarouselMedia } from './carousel-media';
import { ArrowButtons } from './arrow-buttons';
import { SliderData, VedioSliderData, SliderText } from './slider-data';

interface ICarouselProps {
    /*
    * loop default value false 
    */
    loop?: boolean;
    /**
     * default value false
     */
    autoplay?: boolean;
    /**
     * default time 3000
     */
    timeRange?: number;
    /**
     * default value arrow
     */
    nevigationType?: 'arrow' | 'dots';
    /**
     * default value horizontal
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * default false
     */
    controlled?: boolean;
    /**
     * default 2
     */
    selectedId?: number;
    /**
     * default is left
     */
    verticalIndicatorPosition?: 'left' | 'right';
    /**
     * default value is image
     */
    multiMedia?: 'image' | 'text' | 'vedio';
    /**
     * default value false
     */
    defaultSelection?: boolean;
    /**
     * default value false
     */
    StartsFromSecondSlide?:boolean;
}

export const Carousel: FC = memo(({
    multiMedia = 'image',
    autoplay = false,
    loop = false,
    timeRange = 3000,
    nevigationType = 'arrow',
    orientation = 'horizontal',
    verticalIndicatorPosition = 'left',
    controlled = false,
    selectedId = 2,
    defaultSelection = false,
    StartsFromSecondSlide = false,
}: ICarouselProps) => {

    const [currentMedia, setCurrentMedia] = useState<number>(1);
    const [defaultMedia, setDefualtMedia] = useState<number>(2);
    const dataLength = (multiMedia === 'image' ? SliderData
        : multiMedia === 'text' ? SliderText : VedioSliderData).length;

    const nextSlide = useCallback(() => {
        setCurrentMedia(currentMedia === dataLength ? loop ? 1 : currentMedia : currentMedia + 1);
        setDefualtMedia(defaultMedia === dataLength ? defaultMedia : defaultMedia + 1 );
    }, [currentMedia, dataLength, defaultMedia, loop])

    const prevSlide = useCallback(() => {
        setCurrentMedia(currentMedia === 1 ? loop ? dataLength : currentMedia : currentMedia - 1);
        setDefualtMedia(defaultMedia === 1 ? defaultMedia : defaultMedia - 1);
    }, [currentMedia, dataLength, defaultMedia, loop])

    const dotsIndicatorSlider = useCallback((index: number) => {
        setCurrentMedia(index + 1);
    }, []);

    useEffect(() => {
        let interval: any = null;
        if (autoplay) {
            interval = setInterval(nextSlide, timeRange);
        }
        return () => clearInterval(interval);
    }, [autoplay, nextSlide, timeRange]);

    return (
        <CarouselWrapper>
            {
                nevigationType === 'arrow' ?
                    <ArrowButtons nextSlide={nextSlide}
                        prevSlide={prevSlide}
                        loop={loop}
                        orientation={orientation}
                        verticalIndicatorPosition={verticalIndicatorPosition}
                    />
                    : null
            }
            <CarouselImageWrapper className= {multiMedia === 'text' ? 'text' : 'media'}>
                <CarouselMedia
                    SliderData={multiMedia === 'image' ? SliderData : multiMedia === 'text' ? SliderText : VedioSliderData}
                    currentMedia={controlled ? selectedId : StartsFromSecondSlide || defaultSelection ? defaultMedia : currentMedia}
                    nevigationType={nevigationType}
                    dotsSlider={dotsIndicatorSlider}
                    multiMedia={multiMedia}
                    orientation={orientation}
                    verticalIndicatorPosition={verticalIndicatorPosition} />
            </CarouselImageWrapper>
        </CarouselWrapper>
    );
});

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
}

export const Carousel: FC = memo(({
    multiMedia = 'image',
    autoplay = false,
    loop = false,
    nevigationType = 'arrow',
    orientation = 'horizontal',
    verticalIndicatorPosition = 'left',
    controlled = false,
    selectedId = 2,
}: ICarouselProps) => {

    const [currentMedia, setCurrentMedia] = useState<number>(1);
    const dataLength = (multiMedia === 'image' ? SliderData
        : multiMedia === 'text' ? SliderText : VedioSliderData).length;

    const nextSlide = useCallback(() => {
        setCurrentMedia(currentMedia === dataLength ? loop ? 1 : currentMedia : currentMedia + 1);
    }, [currentMedia, dataLength, loop])

    const prevSlide = useCallback(() => {
        setCurrentMedia(currentMedia === 1 ? loop ? dataLength : currentMedia : currentMedia - 1);
    }, [currentMedia, dataLength, loop])

    const dotsIndicatorSlider = useCallback((index: number) => {
        setCurrentMedia(index + 1);
    }, []);

    useEffect(() => {
        let interval: any = null;
        if (autoplay) {
             interval = setInterval(nextSlide, 3000);
        }
        return () => clearInterval(interval);
    }, [autoplay, nextSlide]);

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
            <CarouselImageWrapper>
                <CarouselMedia
                    SliderData={multiMedia === 'image' ? SliderData : multiMedia === 'text' ? SliderText : VedioSliderData}
                    currentMedia={controlled ? selectedId : currentMedia}
                    nevigationType={nevigationType}
                    dotsSlider={dotsIndicatorSlider}
                    multiMedia={multiMedia}
                    orientation={orientation} 
                    verticalIndicatorPosition={verticalIndicatorPosition}/>
            </CarouselImageWrapper>
        </CarouselWrapper>
    );
});

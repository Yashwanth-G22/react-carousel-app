import { FC, memo, useState, useCallback, useEffect } from 'react';
import { CarouselWrapper, CarouselImageWrapper } from './styles';
import { CarouselImages } from './carousel-images';
import { SliderData, VedioSliderData, SliderText } from './slider-data';
import { ArrowButtons } from './arrow-buttons';

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
    multiMedia = 'vedio',
    autoplay = false,
    loop = false,
    nevigationType = 'arrow',
    orientation = 'horizontal',
    verticalIndicatorPosition = 'left',
    controlled = false,
    selectedId = 2,
}: ICarouselProps) => {

    const [currentImg, setCurrnetImg] = useState<number>(0);
    const dataLength = (multiMedia === 'image' ? SliderData :multiMedia === 'text' ? SliderText : VedioSliderData).length;


    const nextSlide = useCallback(() => {
        setCurrnetImg(currentImg === dataLength - 1 ? loop ? 0 : currentImg : currentImg + 1);
    }, [currentImg, dataLength, loop])

    const prevSlide = useCallback(() => {
        setCurrnetImg(currentImg === 0 ? loop ? dataLength - 1 : currentImg : currentImg - 1);
    }, [currentImg, dataLength, loop])

    const dotsIndicatorSlider = useCallback((index: number) => {
        setCurrnetImg(index);
    }, []);

    useEffect(() => {
        if (autoplay) {
            const time = setInterval(nextSlide, 3000);
            console.log(currentImg);
            currentImg === (dataLength - 1) && clearInterval(time);
        }
    }, [autoplay, currentImg, dataLength, nextSlide]);

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
                <CarouselImages 
                    SliderData={ multiMedia === 'image' ? SliderData :multiMedia === 'text' ? SliderText : VedioSliderData}
                    currentImg={ controlled ? selectedId : currentImg}
                    nevigationType={nevigationType}
                    dotsSlider={dotsIndicatorSlider}
                    multiMedia={multiMedia} />
            </CarouselImageWrapper>
        </CarouselWrapper>
    );
});
 
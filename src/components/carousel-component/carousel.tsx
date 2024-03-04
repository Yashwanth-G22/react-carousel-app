import { FC, memo, useState, useCallback, useEffect } from 'react';
import { CarouselWrapper, CarouselImageWrapper } from './styles';
import { CarouselImages } from './carousel-images';
import { SliderData } from './slider-data';
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
     * default 
     */
    controlled?: boolean;
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
    orientation = 'vertical',
    verticalIndicatorPosition = 'left',
    controlled = false,
}: ICarouselProps) => {

    const [currentImg, setCurrnetImg] = useState<number>(0);
    const dataLength = SliderData.length;


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
                <CarouselImages SliderData={SliderData}
                    currentImg={currentImg}
                    nevigationType={nevigationType}
                    dotsSlider={dotsIndicatorSlider}
                    multiMedia={multiMedia} />
            </CarouselImageWrapper>
        </CarouselWrapper>
    );
});

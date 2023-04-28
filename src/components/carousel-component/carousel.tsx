import { FC, memo, useState, useCallback } from 'react';
import { CarouselWrapper, CarouselImageWrapper } from './styles';
import { CarouselImages } from './carousel-images';
import { SliderData } from './slider-data';
import { ArrowButtons } from './arrow-buttons';

interface ICarouselProps {
    /**. default value false */
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
}

export const Carousel: FC = memo(({
    autoplay = false,
    loop = false,
    nevigationType = 'dots',
    orientation = 'horizontal',
}: ICarouselProps) => {

    const [currentImg, setCurrnetImg] = useState<number>(0);
    const length = SliderData.length;

    const nextSlide = useCallback(() => {
        setCurrnetImg(currentImg === length - 1 ? loop ? 0 : currentImg : currentImg + 1);
    }, [currentImg, length, loop])

    const prevSlide = useCallback(() => {
        setCurrnetImg(currentImg === 0 ? loop ? length - 1 : currentImg : currentImg - 1);
    }, [currentImg, length, loop])

    const AutoPlaySlide = useCallback(() => {
        if (autoplay) {
            setInterval(() => nextSlide(), 3000)
        }
    }, [autoplay, nextSlide])

    return (
        <CarouselWrapper>
            <ArrowButtons nextSlide={nextSlide} prevSlide={prevSlide} loop={loop} orientation= {orientation}/>
            <CarouselImageWrapper>
                <CarouselImages SliderData={SliderData} currentImg={currentImg} autoplay={AutoPlaySlide} nevigationType={nevigationType}/>
            </CarouselImageWrapper>
        </CarouselWrapper>
    );
});

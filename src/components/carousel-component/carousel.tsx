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
    /**
     * default value 2
     */
    selectedId?: number;

}

export const Carousel: FC = memo(({
    autoplay = false,
    loop = false,
    nevigationType = 'arrow',
    orientation = 'horizontal',
    selectedId = 2,
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


    const AutoPlaySlide = useCallback(() => {

        if (autoplay) {
            setInterval(() => nextSlide(), 3000)
        }
    }, [autoplay, nextSlide])

    return (
        <CarouselWrapper>
            {
                nevigationType === 'arrow' ?
                    <ArrowButtons nextSlide={nextSlide}
                        prevSlide={prevSlide}
                        loop={loop}
                        orientation={orientation} />
                    : null
            }
            <CarouselImageWrapper>
                <CarouselImages SliderData={SliderData}
                    currentImg={currentImg}
                    autoplay={AutoPlaySlide}
                    nevigationType={nevigationType}
                    dotsSlider={dotsIndicatorSlider} />
            </CarouselImageWrapper>
        </CarouselWrapper>
    );
});

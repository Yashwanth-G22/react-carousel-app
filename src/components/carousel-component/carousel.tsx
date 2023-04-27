import { FC, memo, useState, useCallback } from 'react';
import { CarouselWrapper, CarouselImageWrapper } from './styles';
import { CarouselImages } from './carousel-images';
import { SliderData } from './slider-data';
import { ArrowButtons } from './arrow-buttons';

interface ICarouselProps {
    /**. default value false */
    loop? : boolean;
    /**
     * default value false
     */
    autoplay? : boolean;
    /**
     * default value arrow
     */
    nevigationType? : 'arrow' | 'dots';
    /**
     * default value horizontal
     */
    orientation? : 'horizontal' | 'vertical';
}

export const Carousel: FC = memo(({
    autoplay = false,
    loop = false,
    nevigationType = 'arrow',
    orientation = 'horizontal',
} : ICarouselProps) => {

    const [currentImg, setCurrnetImg]= useState<number>(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrnetImg(currentImg === length -1 ? loop ? 0 :currentImg : currentImg + 1);
    }

    const prevSlide = () => {
        setCurrnetImg(currentImg === 0 ?loop? length-1 : currentImg : currentImg - 1);
    }

    const AutoPlayImages = useCallback(()=> {
        if(autoplay){
            setInterval(()=> {
                setCurrnetImg(currentImg === length -1 ? 0 : currentImg + 1)
                console.log(currentImg)
            }, 3000)
        }
    }, [length, currentImg, autoplay])

    return (
        <CarouselWrapper>
            <ArrowButtons nextSlide= {nextSlide} prevSlide={prevSlide} loop= {loop} />
            <CarouselImageWrapper onChange = {AutoPlayImages()}>
                <CarouselImages SliderData={SliderData} currentImg = {currentImg} />
            </CarouselImageWrapper>
        </CarouselWrapper>
    );
});

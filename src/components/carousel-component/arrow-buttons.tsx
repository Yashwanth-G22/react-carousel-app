import { memo } from "react";
import { ButtonsWrapper, StyledLeftArrow, StyledRightArrow } from "./styles";

interface IArrowButtonProps {
    loop: boolean;
    nextSlide: ()=>void;
    prevSlide: ()=>void;
}

export const ArrowButtons = memo((props : IArrowButtonProps) => {
    const { nextSlide, prevSlide } = props;
    return (
        <ButtonsWrapper>
            <StyledLeftArrow onClick={prevSlide}>{'<'}</StyledLeftArrow>
            <StyledRightArrow onClick={ nextSlide}>{'>'}</StyledRightArrow>
        </ButtonsWrapper>
    )
})
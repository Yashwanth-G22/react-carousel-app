import { memo } from "react";
import { ButtonsWrapper, StyledLeftArrow, StyledRightArrow } from "./styles";

interface IArrowButtonProps {
    loop: boolean;
    nextSlide: () => void;
    prevSlide: () => void;
    orientation: string;
}

export const ArrowButtons = memo((props: IArrowButtonProps) => {
    const { nextSlide, prevSlide, orientation } = props;
    return (
        <ButtonsWrapper>
            <StyledLeftArrow onClick={prevSlide} className= {orientation === 'horizontal' ? 'horizontal' : 'vertical'}/>
            <StyledRightArrow onClick={nextSlide} />
        </ButtonsWrapper>
    )
})
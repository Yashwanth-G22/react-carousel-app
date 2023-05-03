import { memo } from 'react';
import {
    ButtonsWrapper, StyledLeftArrow, StyledRightArrow,
    StyledVerticalButton
} from "./styles";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface IArrowButtonProps {
    loop: boolean;
    nextSlide: () => void;
    prevSlide: () => void;
    orientation: string;
    verticalIndicatorPosition: string;
}

export const ArrowButtons = memo((props: IArrowButtonProps) => {
    const { nextSlide, prevSlide, orientation, verticalIndicatorPosition } = props;
    return (<>
        {
            orientation === 'horizontal' ?
                <ButtonsWrapper>
                    <StyledLeftArrow onClick={prevSlide} />
                    <StyledRightArrow onClick={nextSlide} />
                </ButtonsWrapper>
                : <StyledVerticalButton className={verticalIndicatorPosition === 'right' ? 'rightIndicator' : 'leftIndicator'}>
                    <FaChevronUp onClick={prevSlide} />
                    <FaChevronDown onClick={nextSlide} />
                </StyledVerticalButton>
        }
    </>
    );
});

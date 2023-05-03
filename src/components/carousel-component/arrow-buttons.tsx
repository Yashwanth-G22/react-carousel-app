import { memo } from 'react';
import {
    ButtonsWrapper, StyledLeftArrow, StyledRightArrow,
    StyledVerticalButton
} from './styles';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IArrowButtonProps } from './types';

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

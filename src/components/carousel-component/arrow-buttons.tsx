import { memo } from 'react';
import {
    ButtonsWrapper, StyledLeftArrow, StyledRightArrow,
    StyledVerticalButton
} from './styles';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IArrowButtonProps } from './types';

export const ArrowButtons = memo((props: IArrowButtonProps) => {
    const { nextSlide, prevSlide, orientation, verticalIndicatorPosition, currentMedia, dataLenght, loop, controlled } = props;
    return (<>
        {
            orientation === 'horizontal' ?
                <ButtonsWrapper currentMedia={currentMedia} dataLength={dataLenght}
                    loop={loop} controlled={controlled}>
                    <StyledLeftArrow onClick={prevSlide} />
                    <StyledRightArrow onClick={nextSlide} />
                </ButtonsWrapper>
                : <StyledVerticalButton verticalIndicatorPosition={verticalIndicatorPosition}
                    currentMedia={currentMedia} dataLength={dataLenght} loop={loop}
                    controlled={controlled}>
                    <FaChevronUp onClick={prevSlide} />
                    <FaChevronDown onClick={nextSlide} />
                </StyledVerticalButton>
        }
    </>
    );
});

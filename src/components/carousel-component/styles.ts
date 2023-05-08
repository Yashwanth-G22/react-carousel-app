import styled, { css, keyframes } from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Fade = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const animationProperty = css`
    animation:${Fade} 1s ease ;
`;

export const VerticalArrowLeft = css`
    left: 40px;
`;

export const VerticalArrowRignt = css`
    right: 40px;
`;

export const HorizontalArrowIndication = css`
    opacity: 0.5;
    cursor: not-allowed;
    &:hover{
        color: #c0c8cf;
    }
`;

export const HorizontalArrow = css`
    opacity: 1;
    cursor: pointer;
    &:hover{
        color: rgba(14, 155, 255, 0.61);
    }
`;

export const MaintainWithAspectRatioForImage = css`
    border-radius: 0px;
    border: none;
`;

export const DisableRight = css<{ currentMedia: number, dataLength: number }>`
    ${({ currentMedia, dataLength }) => (currentMedia === dataLength) ? HorizontalArrowIndication : HorizontalArrow};
`;

export const DisableLeft = css<{ currentMedia: number }>`
    ${({ currentMedia }) => (currentMedia === 1) ? HorizontalArrowIndication : HorizontalArrow};
`;

export const ControlledDisables = css`
    opacity: 0.5;
    cursor: not-allowed;
    color: #e4e9ed ;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 95vh;
    justify-content: center;
`;

export const CarouselDataWrapper = styled.div<{ text: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: ${({ text }) => text ? 'unset' : 'inherit'};
`;

export const ButtonsWrapper = styled.div<{ currentMedia: number, dataLength: number, loop: boolean, controlled: boolean }>`
    height: 100%;
    display: flex;
    flex-direction: row;
    &>:first-child{
        ${({ loop, controlled }) => controlled ? ControlledDisables : loop ? 'unset' : DisableLeft}
    }
    &>:nth-child(2){
        ${({ loop, controlled }) => controlled ? ControlledDisables : loop ? 'unset' : DisableRight}
    }
`;

export const StyledRightArrow = styled(FaAngleRight)`
    position: absolute;
    top: 45%;
    right: 42px;
    font-size: 4rem;
    z-index: 10;
    color: #ebe8e8;
    transition: all 3s ease ;
`;

export const StyledLeftArrow = styled(FaAngleLeft)`
    position: absolute;
    top: 45%;
    left: 52px;
    font-size: 4rem;
    z-index: 10;
    color: #ebe8e8;
    transition: all 3s ease ;
`;

export const StyledVerticalButton = styled.div<{ verticalIndicatorPosition: string, currentMedia: number, dataLength: number, loop: boolean, controlled: boolean }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 45%;
    font-size: 3rem;
    cursor: pointer;
    color: #ebe8e8;
    ${({ verticalIndicatorPosition }) => verticalIndicatorPosition === 'right' ? VerticalArrowRignt : VerticalArrowLeft};
    &>:first-child{
        ${({ loop, controlled }) => controlled ? ControlledDisables : loop ? 'unset' : DisableLeft}
    }
    &>:nth-child(2){
        ${({ loop, controlled }) => controlled ? ControlledDisables : loop ? 'unset' : DisableRight}
    }
`;

export const StyledMutliMediaContainer = styled.div<{ aspectRatioForImage: boolean }>`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
        height: inherit;
        &>:first-child{
            ${({ aspectRatioForImage }) => aspectRatioForImage ? MaintainWithAspectRatioForImage : 'unset'};
        }
`;

export const StyledImage = styled.img`
    width: inherit;
    height: inherit;
    overflow: hidden;
    border-radius: 20px;
    ${animationProperty}
`;

export const DotIndication = styled.div<{ currentMedia: number, index: number }>`
    display: block;
    border: 2px solid black;
    font-size: 3rem;
    margin: 1px;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    cursor: pointer;
    background-color: ${({ currentMedia, index }) => (currentMedia === index + 1) ? 'black' : 'white'};
`;

export const CarouselMultiMediaWrapper = styled.div<{ orientation: string, side: string }>`
    display: flex;
    justify-content: center;
    gap: 5px;
    width: inherit;
    height: inherit;
    flex-direction: ${({ orientation, side }) => (orientation === 'horizontal' ? 'column' : (side === 'left') ? 'row-reverse' : 'row')};
`;

export const DotsWrapper = styled.div<{ orientation: string }>`
    display: flex;
    gap: 3px;
    justify-content: center; 
    flex-direction: ${({ orientation }) => (orientation === 'horizontal' ? 'row' : 'column')} ;
`;

export const StyledSpan = styled.span`
    & :active{
    background-color: black;
    border-radius: 100%;
    height: 15px;
    }
    background-color: white;
    border-radius: 100%;

`;

export const StyledTextTag = styled.h1`
    display: block;
    justify-content: center;
    width: unset;
    ${animationProperty}
`;

export const StyledVideo = styled.video`
    width: 500px;
    height: 500px;
    ${animationProperty}
`;

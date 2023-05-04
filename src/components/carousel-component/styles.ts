import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 95vh;
    justify-content: center;
`;

export const CarouselImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: inherit;
    &.media{
        height: inherit;
    }
    &.text{
        height: unset;
    }
`;

export const ButtonsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const StyledRightArrow = styled(FaAngleRight)`
    position: absolute;
    top: 45%;
    right: 42px;
    font-size: 4rem;
    color: #ebe8e8;
    cursor: pointer;
`;

export const StyledLeftArrow = styled(FaAngleLeft)`
    position: absolute;
    top: 45%;
    left: 52px;
    font-size: 4rem;
    z-index: 10;
    color: #ebe8e8;
    cursor: pointer; 
`;

export const StyledVerticalButton = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 45%;
    font-size: 3rem;
    cursor: pointer;
    color: #ebe8e8;
    & button {
        border: none;
        background: none;
        padding: 0px;
        cursor: pointer;
    }
    &.leftIndicator {
    left: 40px;
    }
    &.rightIndicator {
    right: 40px;
    }
`;

export const StyledMutliMediaContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
        height: inherit;
`;

export const StyledImage = styled.img`
    width: inherit;
    height: inherit;
    overflow: hidden;
    border-radius: 20px;
    opacity: 1;
    transition: 2s ease 1s;
    animation: 1s ease 0s 1 normal none running ;
`;

export const DotIndication = styled.div`
    display: block;
    border: 2px solid black;
    font-size: 3rem;
    margin: 1px;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    cursor: pointer;
    &:active {
        background-color: black;
    }
    &>.rightDots {
        flex-direction: row-reverse;
    }
    &:hover {
        background-color: lightgray;
    }
`;

export const CarouselDotsImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    width: inherit;
    height: inherit;
    &.horizontal {
       flex-direction: column;
    }
    &.vertical {
        flex-direction: row;
    }
`;

export const DotsWrapper = styled.div`
    display: flex;
    gap: 3px;
    justify-content: center; 
    &.horizontal-dots {
         flex-direction: row;
    }
     &.vertical-dots {
        flex-direction: column;
    } 
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
    margin-top: 20px;
`;

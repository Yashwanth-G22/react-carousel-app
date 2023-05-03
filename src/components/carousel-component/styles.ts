import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft, FaChevronUp, FaChevronDown } from 'react-icons/fa';


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
    height: 100%;
    width: 100%;
`;

export const StyledRightArrow = styled(FaAngleRight)`
    position: absolute;
    top: 45%;
    right: 42px;
    font-size: 4rem;
    color: gray;
    cursor: pointer;
`;

export const StyledLeftArrow = styled(FaAngleLeft)`
    position: absolute;
    top: 45%;
    left: 52px;
    font-size: 4rem;
    color: gray;
    cursor: pointer;
    
`;

export const StyledMutliMediaContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`;

export const StyledImage = styled.img`
    width: 800px;
    height: 430px;
    border-radius: 20px;
`;

export const ButtonsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
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
`;

export const CarouselDotsImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
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

export const StyledVerticalButton = styled.div`
    & button {
        border: none;
        background: none;
        padding: 0px;
        cursor: pointer;
    }
`;

export const StyledVerticalArrowUp = styled(FaChevronUp)``;

export const StyledVerticalArrowDown = styled(FaChevronDown)``;

export const StyledTextTag = styled.h1`
    display: block;
    justify-content: center;
    margin-top: 20px;
`;

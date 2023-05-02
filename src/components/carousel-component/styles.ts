import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft, FaRegCircle, FaChevronUp, FaChevronDown } from 'react-icons/fa';


export const CarouselWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 700px;
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
    top: 50%;
    right: 42px;
    font-size: 40px;
    color: black;
    cursor: pointer;
`;

export const StyledLeftArrow = styled(FaAngleLeft)`
    position: absolute;
    top: 50%;
    left: 52px;
    font-size: 40px;
    color: black;
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

export const DotIndication = styled(FaRegCircle)`
    display: inline-flex;
    cursor: pointer;
    font-size: 20px;
`;

export const CarouselDotsImageWrapper = styled.div`
    display: grid;
    gap: 5px;
    justify-content: center;
`;

export const DotsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3px;
`;

export const StyledSpan = styled.span`
    & > :active{
    background-color: black;
    border-radius: 100%;
    height: 20px;
    }
    background-color: white;
    border-radius: 100%;
    height: 20px;
`;

export const StyledVerticalButton = styled.div`
    & button {
        border: none;
        background: none;
        padding: 0px;
        cursor: pointer;
    }
`;

export const StyledVerticalArrowUp = styled(FaChevronUp)`
`;
export const StyledVerticalArrowDown = styled(FaChevronDown)`
`;

export const StyledTextTag = styled.h1`
    display: block;
    justify-content: center;
`;

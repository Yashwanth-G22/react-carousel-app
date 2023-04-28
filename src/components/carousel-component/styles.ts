import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft, FaRegCircle } from 'react-icons/fa';


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

export const StyledImagesContainer = styled.div`
        display: flex;
        flex-direction: column;
`;

export const StyledImage = styled.img`
    width: 800px;
    height: 430px;
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

`;
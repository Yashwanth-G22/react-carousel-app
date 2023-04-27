import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    height: 100%;
`;
 
export const CarouselImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyledRightArrow = styled.button`
    position: absolute;
    top: 50%;
    right: 32px;
    border: none;
    background-color: black;
    color: white;
`;

export const StyledLeftArrow = styled.button`
    position: absolute;
    top: 50%;
    left: 32px;
    border: none;
    background-color: black;
    color: white;
`;

export const StyledImagesContainer = styled.div`
        align-items: center;
`;

export const StyledImage = styled.img`
    width: 900px;
    height: 600px;
`;

export const ButtonsWrapper = styled.div`
    height: 100%;
`;
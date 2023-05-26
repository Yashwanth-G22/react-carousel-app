import styled from 'styled-components';
import { IStyleDivProps } from './types';

export const ListViewWrapper = styled.div`
    position: absolute;
    height: 90%;
    width: 90%;
    inset: 0px;
    padding: 10px 40px;
    z-index: 5;
`;

export const StyledDiv = styled.div<Pick<IStyleDivProps, 'orientation'>>`
    display: flex;
    flex-direction: ${({ orientation }) => orientation === 'horizontal' ? 'row' : 'column'};
    position: relative;
    overflow: auto;
    height: 100%;
    width: 100%;
    border-style: solid;
    box-sizing: border-box;
    border-color: rgb(216, 218, 221);
    border-width: 1px;
    border-radius: 6px;
    box-shadow: none;   
`;

export const StyledItemsWrapper = styled.div<IStyleDivProps>`
    position: relative;
    width: ${({ width, orientation }) => orientation === 'vertical' ? '100%' : width ? width + 'px' : '40px'};
    height: ${({ height, orientation }) => orientation === 'horizontal' ? '100%' : height ? height + 'px' : '50px'};
    border-style: solid;
    box-sizing: border-box;
    border-color: rgb(216, 218, 221);
    border-width:${({ multipleSelectedItems, index, orientation }) => (multipleSelectedItems.find((elem) => elem === index) === index ?
        orientation === 'horizontal' ? '1px 0px 1px 0px' : '0px 1px 0px 1px' : '1px 1px 1px 1px')};
    text-align: ${({ orientation }) => orientation === 'horizontal' ? 'center' : 'start'};
    background-color: ${({ selectable, selectedItem, index, multipleSelectedItems }) => (selectable === 'none' ? 'unset'
        : selectable === 'multiple' ? multipleSelectedItems.find((elem) => elem === index) === index ? 'rgba(0,119,217,1)' : 'white'
            : selectedItem === index ? 'rgba(0,119,217,1)' : 'white')};
    &:hover{
       background-color: ${({selectedItem, index, multipleSelectedItems, selectable}) =>( selectedItem || multipleSelectedItems.find((elem) => elem === index) === index || selectable === 'none' ? '' : 'rgb(216, 218, 221)')}
    }
`;

export const ListItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledButton = styled.button`
    padding: 5px;
    margin-top: 4px;
    cursor: pointer;
    border-radius: 10px;
    background-color: #f5f5f5;
`;

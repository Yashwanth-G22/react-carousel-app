import styled from "styled-components";

export const ListViewWrapper = styled.div`
    position: absolute;
    height: 90%;
    width: 90%;
    inset: 0px;
    padding: 10px 40px;
    z-index: 5;
`;

export const StyledDiv = styled.div<{ orientation: string }>`
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

export const StyledItemsWrapper = styled.div<{ selectedItem: number | null, index: number, orientation: string, multipleSelectedItems: number[], selectable: string, height: number, width: number, setRandomSize: boolean }>`
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
        : selectable === 'multiple' ? multipleSelectedItems.find((elem) => elem === index) === index ? 'rgba(0,119,217,1)' : 'unset'
            : selectedItem === index ? 'rgba(0,119,217,1)' : 'unset')};
`;

export const ListItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

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
    flex-direction: ${({ orientation }) => orientation === 'horiental' ? 'row' : 'column'};
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

export const StyledItemsWrapper = styled.div<{ selectedItem: number | null, index: number, orientation: string, multipleSelectedItems: number[], selectedTable: string }>`
    position: relative;
    height: 99%;
    width: 100%;
    border-style: solid;
    box-sizing: border-box;
    border-color: rgb(216, 218, 221);
    border-width:1px 1px 1px 1px;
    text-align: ${({ orientation }) => orientation === 'horiental' ? 'center' : 'start'};
    background-color: ${({ selectedTable, selectedItem, index, multipleSelectedItems }) => (selectedTable === 'none' ? 'unset'
        : selectedTable === 'multiple' ? multipleSelectedItems.find((elem) => elem === index) === index ? 'rgba(0,119,217,1)' : 'unset'
            : selectedItem === index ? 'rgba(0,119,217,1)' : 'unset')};
`;

export const ListItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

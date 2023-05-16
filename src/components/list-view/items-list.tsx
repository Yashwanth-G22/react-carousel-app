import {memo} from 'react';
import { StyledItemsWrapper } from "./style";

interface IListItemsProps {
    itemsArray: number[]
    selectedItem: null | number
    handleClick: (index: number) => void
    orientation: string
    selectedTable: string
    multipleSelectedItems: number[]
}

export const ListItems = memo((props: IListItemsProps) => {

    const { itemsArray, selectedItem, handleClick, orientation, selectedTable, multipleSelectedItems } = props;

    return <>
        {
            itemsArray.map((index) => {
                return <StyledItemsWrapper key={index} onClick={() => handleClick(index)}
                    selectedItem={selectedItem} index={index} multipleSelectedItems = {multipleSelectedItems}
                    orientation={orientation} selectedTable= {selectedTable}>{`items ${index}`}</StyledItemsWrapper>
            })
        }
    </>


});

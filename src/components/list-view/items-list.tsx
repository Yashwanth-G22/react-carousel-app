import { memo } from 'react';
import { StyledItemsWrapper } from "./style";

interface IListItemsProps {
    itemsArray: number[],
    selectedItem: null | number,
    handleClick: (index: number) => void,
    orientation: string,
    selectable: string,
    multipleSelectedItems: number[],
    height: number,
    width: number,
    setRandomSize: boolean,
}

export const ListItems = memo((props: IListItemsProps) => {

    const { itemsArray, selectedItem, handleClick, orientation,
        selectable, multipleSelectedItems, height, width, setRandomSize } = props;

    return <>
        {
            itemsArray.map((index) => {
                return <div>
                    <StyledItemsWrapper key={index} onClick={() => handleClick(index)} height={height}
                        selectedItem={selectedItem} index={index} multipleSelectedItems={multipleSelectedItems}
                        orientation={orientation} selectable={selectable} width={width} setRandomSize={setRandomSize}
                    >{`items ${index}`}</StyledItemsWrapper>
                </div>

            })
        }
    </>


});

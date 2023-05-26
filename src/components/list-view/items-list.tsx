import { memo } from 'react';
import { StyledItemsWrapper } from './style';
import { IListItemsProps } from './types'


export const ListItems = memo((props: IListItemsProps) => {

    const { itemsArray, selectedItem, handleClick, orientation, selectedControl,
        selectable, multipleSelectedItems, height, width, setRandomSize, dynamicSize } = props;

    return <>
        {
            itemsArray.map((index) => {
                return <div>
                    <StyledItemsWrapper key={index} onClick={() => handleClick(index)} height={height} selectedControl={selectedControl}
                        selectedItem={selectedItem} index={index} multipleSelectedItems={multipleSelectedItems} dynamicSize={dynamicSize}
                        orientation={orientation} selectable={selectable} width={width} setRandomSize={setRandomSize}
                    >{`items ${index}`}</StyledItemsWrapper>
                </div>
            })
        }
    </>


});

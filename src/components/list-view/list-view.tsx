import { useState, memo, useCallback, useEffect } from 'react';
import { ListViewWrapper, StyledButton, StyledDiv } from './style';
import { ListItems } from './items-list';
import { IListViewProps } from './types';

export const List = memo(({
    orientation = 'horizontal',
    selectable = 'single',
    hidden = false,
    itemHeight = 0,
    itemWidth = 0,
    setRandomSize = false,
    selectedControl = false,
    loadMore = false,
    dynamicSize = false,
    items= [],
}: IListViewProps) => {

    const [itemsArray, setItemsArray] = useState<number[]>([]);
    const [selectedItem, setSelectedItem] = useState<null | number>(null);
    const [multipleSelectedItems, setMultipleSelectedItems] = useState<number[]>([])

    const getItems = useCallback((start: number, end: number) => {
        for (let i = start; i <= end; i++) {
            setItemsArray(oldArray => [...oldArray, i])
        }
    }, [])

    const handleClick = useCallback((index: number) => {
        if (!selectedControl) {
            if (selectable === 'single') {
                selectedItem === index ? setSelectedItem(null) : setSelectedItem(index);
                setMultipleSelectedItems([]);
            }
            else if (selectable === 'multiple') {
                multipleSelectedItems.find((elem) => elem === index) === index ? setMultipleSelectedItems(multipleSelectedItems.filter((elem) => elem !== index)) : setMultipleSelectedItems(oldArray => [...oldArray, index]);
                setSelectedItem(null);
            }
            else {
                setMultipleSelectedItems([]);
                setSelectedItem(null);
            }
        } else {
            setSelectedItem(70)
        }
        
    }, [multipleSelectedItems, selectable, selectedControl, selectedItem])

    useEffect(() => getItems(1, 450), [getItems])

    return <ListViewWrapper>
        <StyledDiv orientation={orientation} >
            {
                hidden ? null : <ListItems itemsArray={itemsArray} selectedItem={selectedItem} selectedControl = {selectedControl}
                    handleClick={handleClick} orientation={orientation} height={itemHeight} width={itemWidth} dynamicSize= {dynamicSize}
                    selectable={selectable} multipleSelectedItems={multipleSelectedItems} setRandomSize={setRandomSize} items= {items} />
            }
        </StyledDiv>
        {loadMore ? <StyledButton>LoadMore</StyledButton> : null}
    </ListViewWrapper>
})
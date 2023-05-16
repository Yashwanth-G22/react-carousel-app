import { useState, memo, useCallback, useEffect } from 'react';
import { ListViewWrapper, StyledDiv } from "./style"
import { ListItems } from './items-list';

interface IListViewProps {
    selectedTable?: string,
    orientation?: string,
}

export const List = memo(({
    orientation = 'horiental',
    selectedTable = 'single',
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
        if(selectedTable === 'single'){ 
            setSelectedItem(index);
            setMultipleSelectedItems([]);
        }
        else if(selectedTable === 'multiple') {
            setMultipleSelectedItems(oldArray => [...oldArray, index]);
            setSelectedItem(null);
        }
        else {
            setMultipleSelectedItems([]);
            setSelectedItem(null);
        }
    },[selectedTable])

    useEffect(() => getItems(1, 500), [getItems])

    return <ListViewWrapper>
        <StyledDiv orientation={orientation}>
            <ListItems itemsArray={itemsArray} selectedItem={selectedItem}
                handleClick={handleClick} orientation={orientation} 
                selectedTable= {selectedTable} multipleSelectedItems= {multipleSelectedItems}/>
        </StyledDiv>
    </ListViewWrapper>
})
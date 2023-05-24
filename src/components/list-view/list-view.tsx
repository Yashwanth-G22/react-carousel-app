import { useState, memo, useCallback, useEffect } from 'react';
import { ListViewWrapper, StyledDiv } from "./style"
import { ListItems } from './items-list';

interface IListViewProps {
    /**\
     * default value single
     */
    selectable?: 'single' | 'multiple' | 'none',
    /**
     * default value horizontal
     */
    orientation?: 'horizontal' | 'vertical',
    /**
     * default
     */
    items?: string[],
    /**
     * default value false
     */
    hidden?: boolean,
    /**
     * default value 0
     */
    itemHeight?: number,
    /**
     * default value 0
     */
    itemWidth?: number,
    /**
     * default value false
     */
    setRandomSize?: boolean,
    /**
     * default value false
     */
    selectedControl?: boolean,

}

export const List = memo(({
    orientation = 'horizontal',
    selectable = 'single',
    hidden = false,
    itemHeight = 0,
    itemWidth = 0,
    setRandomSize = false,
    selectedControl = false,
    items= [],
}: IListViewProps) => {

    const [itemsArray, setItemsArray] = useState<number[]>([]);
    const [selectedItem, setSelectedItem] = useState<null | number>(null);
    const [multipleSelectedItems, setMultipleSelectedItems] = useState<number[]>([])

    const getItems = useCallback((start: number, end: number) => {
        for (let i = start; i <= end; i++) {
            items.push( `item ${i}`);
            setItemsArray(oldArray => [...oldArray, i])
        }
    }, [items])

    const handleClick = useCallback((index: number) => {
        if(!selectedControl){

            if (selectable === 'single') {
                setSelectedItem(index);
                setMultipleSelectedItems([]);
            }
            else if (selectable === 'multiple') {
                setMultipleSelectedItems(oldArray => [...oldArray, index]);
                setSelectedItem(null);
            }
            else {
                setMultipleSelectedItems([]);
                setSelectedItem(null);
            }
        }else{
            setSelectedItem(70)
        }
    }, [selectable, selectedControl])

    useEffect(() => getItems(1, 500), [getItems])

    return <ListViewWrapper>
        <StyledDiv orientation={orientation} >
            {
                hidden ? null : <ListItems itemsArray={itemsArray} selectedItem={selectedItem}
                    handleClick={handleClick} orientation={orientation} height={itemHeight} width={itemWidth}
                    selectable={selectable} multipleSelectedItems={multipleSelectedItems} setRandomSize={setRandomSize} />
            }
        </StyledDiv>
    </ListViewWrapper>
})
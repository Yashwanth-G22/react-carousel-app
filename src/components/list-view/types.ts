export interface IListViewProps {
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
    items?: string[] ,
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
    /** 
     * default value false
    */
    loadMore?: boolean,
    /**
     * default value false
     */
    dynamicSize?: boolean
}

export interface IListItemsProps {
    itemsArray: number[],
    selectedItem: null | number,
    handleClick: (index: number) => void,
    orientation: string,
    selectable: string,
    multipleSelectedItems: number[],
    height: number,
    width: number,
    setRandomSize: boolean,
    selectedControl: boolean,
    dynamicSize: boolean,
    items: string[] | null
}

export interface IStyleDivProps {
    selectedItem: number | null,
    index: number,
    orientation: string,
    multipleSelectedItems: number[],
    selectable: string,
    height: number,
    width: number,
    setRandomSize: boolean,
    selectedControl: boolean,
    dynamicSize: boolean
}
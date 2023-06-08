export interface ISlideImages {
    data: string
}

export interface ICarouselProps {
    /*
    * loop default value false 
    */
    loop?: boolean;
    /**
     * default value false
     */
    autoplay?: boolean;
    /**
     * default time 3000
     */
    timeRange?: number;
    /**
     * default value arrow
     */
    navigationType?: 'arrow' | 'dots';
    /**
     * default value horizontal
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * default false
     */
    controlled?: boolean;
    /**
     * default 2
     */
    selectedId?: number;
    /**
     * default is left
     */
    verticalIndicatorPosition?: 'left' | 'right';
    /**
     * default value false
     */
    defaultSelection?: boolean;
    /**
     * default value false
     */
    StartsFromSecondSlide?: boolean;
    /**
     * default Value is false
     */
    aspectRatioForImage?: boolean
}

export interface IMediaProps {
    sliderData: ISlideImages[];
    currentMedia: number;
    navigationType: string;
    dotCallbackFunction: (index: number) => void;
    orientation: string;
    verticalIndicatorPosition: string;
    aspectRatioForImage: boolean
    styledTextAlign: (value: boolean) => void
}

export interface IArrowButtonProps {
    loop: boolean;
    nextSlide: () => void;
    prevSlide: () => void;
    orientation: string;
    verticalIndicatorPosition: string;
    currentMedia: number;
    dataLength: number;
    controlled: boolean
}

export interface IDotContainerProps {
    dotsSlider: (index: number) => void;
    currentMedia: number
}
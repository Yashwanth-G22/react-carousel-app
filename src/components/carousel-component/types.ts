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
    nevigationType?: 'arrow' | 'dots';
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
     * default value is image
     */
    multiMedia?: 'image' | 'text' | 'vedio';
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
    SliderData: ISlideImages[];
    currentMedia: number;
    nevigationType: string;
    dotsSlider: (index: number) => void;
    multiMedia: string;
    orientation: string;
    verticalIndicatorPosition: string;
    aspectRatioForImage: boolean
}

export interface IArrowButtonProps {
    loop: boolean;
    nextSlide: () => void;
    prevSlide: () => void;
    orientation: string;
    verticalIndicatorPosition: string;
    currentMedia: number;
    dataLenght: number;
    controlled: boolean
}

export interface IDotContainerProps {
    dotsSlider: (index: number) => void;
    currentMedia: number
}
import type { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "../components/carousel-component/carousel";

const meta = {
    title: 'Example/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    argTypes: {
        multiMedia:{
            options: ['image' , 'vedio', 'text' ],
            control: { type: 'radio'},
        },
        autoplay: { control: 'boolean' },
        loop: { control: 'boolean' },
        nevigationType: {
            options: ['arrow', 'dots'],
            control: { type: 'radio' },
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' },
        },
        verticalIndicatorPosition: {
            options: ['left', 'right'],
            control: { type : 'radio'},
        },
        backgroundColor: { control: 'color' },
        selectedId: { control: 'number'},
    },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autoplay: Story = {
    args: {
        autoplay: false,
        loop: true,
        multiMedia: 'image',
        TimeRanges: 3000,
        nevigationType: 'arrow',
        orientation: 'horizontal',
    }
}

export const HorizontalCarousel: Story = {
    args: {
        orientation: 'horizontal',
        loop:false,
    }
}

export const Loop: Story = {
    args: {
        loop: true,
        multiMedia: 'image',
        nevigationType: 'dots',
        orientation: 'horizontal',
    }
}

export const VerticalCarousel: Story = {
    args: {
        orientation:'vertical',
        loop:true,
    }
}
export const Dots: Story = {
    args: {
        nevigationType: 'dots',
        multiMedia: 'image',
        orientation: 'horizontal',
    }
}

export const WithControlledMode: Story = {
    args: {
        controlled: 2,
        multiMedia: 'image',
    }
}

export const WithDefaultSelection: Story = {
    args: {
        defaultSelectedId: 1,
        multiMedia: 'image',
    }
}

export const WithIndicatorPosition: Story = {
    args: {
        verticalIndicatorPosition: 'left',
        orientation: 'vertical',
        multiMedia: 'image',
    }
}
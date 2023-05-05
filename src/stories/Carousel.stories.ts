import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from '../components/carousel-component/carousel';

const meta = {
    title: 'Carousel',
    component: Carousel,
    tags: ['autodocs'],
    argTypes: {
        multiMedia: {
            options: ['image', 'vedio', 'text'],
            control: { type: 'radio' },
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
            control: { type: 'radio' },
        },
        defaultSelection: { control: 'boolean' },
        StartsFromSecondSlide: { control: 'boolean' },
    },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autoplay: Story = {
    args: {
        autoplay: false,
        loop: true,
        multiMedia: 'image',
        timeRanges: 3000,
        nevigationType: 'arrow',
        orientation: 'horizontal',
    }
}

export const HorizontalCarousel: Story = {
    args: {
        orientation: 'horizontal',
        loop: false,
    }
}

export const Loop: Story = {
    args: {
        loop: true,
        multiMedia: 'image',
        nevigationType: 'arrow',
        orientation: 'horizontal',
    }
}

export const StartsFromSecondSlide: Story = {
    args: {
        StartsFromSecondSlide: true,
        multiMedia: 'image',
    }
}

export const VerticalCarousel: Story = {
    args: {
        orientation: 'vertical',
        verticalIndicatorPosition: 'right',
        loop: true,

    }
}

export const WithControlledMode: Story = {
    args: {
        controlled: true,
        multiMedia: 'image',
    }
}

export const WithArrowIndicator: Story = {
    args: {
        orientation: 'arrow',
        multiMedia: 'image',
    }
}

export const WithDefaultSelection: Story = {
    args: {
        defaultSelection: true,
        selectedId: 2,
        multiMedia: 'image',
    }
}

export const WithDotIndicator: Story = {
    args: {
        nevigationType: 'dots',
        multiMedia: 'image',
        orientation: 'horizontal',
    }
}

export const WithIndicatorPositionSetToLeft: Story = {
    args: {
        verticalIndicatorPosition: 'left',
        orientation: 'vertical',
        multiMedia: 'image',
    }
}

export const MaintainWithAspectRatioForImage: Story = {
    args: {
        aspectRatioForImage: true,
    }
}
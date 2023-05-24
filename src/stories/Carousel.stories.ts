import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from '../components/carousel-component/carousel';

const meta = {
    title: 'Carousel',
    component: Carousel,
    tags: ['autodocs'],
    argTypes: {
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
        autoplay: true,
        loop: true,
        timeRanges: 3000,
        nevigationType: 'arrow',
        orientation: 'horizontal',
    }
}

export const HorizontalCarousel: Story = {
    args: {
        orientation: 'horizontal',
        nevigationType: 'arrow',
    }
}

export const Loop: Story = {
    args: {
        loop: true,
        nevigationType: 'arrow',
        orientation: 'horizontal',
    }
}

export const StartsFromSecondSlide: Story = {
    args: {
        StartsFromSecondSlide: true,
        orientation: 'horizontal',
        nevigationType: 'arrow'
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
    }
}

export const WithArrowIndicator: Story = {
    args: {
        orientation: 'arrow',
    }
}

export const WithDefaultSelection: Story = {
    args: {
        defaultSelection: true,
        selectedId: 2,
    }
}

export const WithDotIndicator: Story = {
    args: {
        nevigationType: 'dots',
        orientation: 'vertical',
        verticalIndicatorPosition: 'left'
    }
}

export const WithIndicatorPositionSetToLeft: Story = {
    args: {
        verticalIndicatorPosition: 'left',
        orientation: 'vertical'
    }
}

export const MaintainWithAspectRatioForImage: Story = {
    args: {
        aspectRatioForImage: true,
    }
}
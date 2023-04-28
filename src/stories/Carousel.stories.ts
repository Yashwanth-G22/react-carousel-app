import type { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "../components/carousel-component/carousel";

const meta = {
    title: 'Example/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    argTypes: {
        Autoplay: { control: 'boolean' },
        loop: { control: 'boolean' },
        nevigationType: {
            options: ['arrow', 'dots'],
            control: { type: 'radio' },
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' },
        },
        backgroundColor: { control: 'color' },
        selectedId: { control: 'number'},
    },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autoplay: Story = {
    args: {
        Autoplay: false,
        loop: true,
        TimeRanges: 3000,
        nevigationType: 'arrow',
        orientation: 'horizontal',
    }
}

export const Loop: Story = {
    args: {
        loop: true,
        nevigationType: 'dots',
        orientation: 'horizontal',
    }
}

export const Dots: Story = {
    args: {
        nevigationType: 'dots',
        orientation: 'horizontal',
    }
}

export const WithControlledMode: Story = {
    args: {
        selectedId: 2
    }
}

export const WithDefaultSelection: Story = {
    args: {
        defaultSelectedId: 2
    }
}
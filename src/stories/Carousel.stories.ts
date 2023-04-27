import type { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "../components/carousel-component/carousel";

const meta = {
    title: 'Example/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control : 'color'},
    },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autoplay: Story = {
    args : {
        Autoplay: true,
    }
}

export const Loop: Story = {
    args : {
        loop: true,
    }
}
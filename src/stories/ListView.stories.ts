import type { Meta, StoryObj } from '@storybook/react';
import { List } from '../components/list-view/list-view';

const meta = {
    title: 'ListView',
    component: List,
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            options: ['horiental', 'vertical'],
            control: { type: 'radio' }
        },
        selectedTable: {
            options: ['single', 'multiple', 'none'],
            control: { type: 'radio' }
        }
       
    }

} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ControlledModeWithOnDemand: Story = {
    args: {
        orientation: 'horiental',
        selectedTable: 'single'
    }
}

export const CustomActionToFetchMore: Story = {
    args: {
        orientation:'vertical',
        selectedTable: 'multiple'
    }
}

export const Default: Story = {
    args: {
        orientation: 'horiental'
    }
}

export const DynamiSizeUsingCallbackFunction: Story = {
    args: {
        orientation:'vertical'
    }
}

export const HorizontallyVirtualizedWithDynamicWidth: Story = {
    args: {
        orientation:'vertical'
    }
}
export const HorizontallyVirtualizedWithFixedWidth: Story = {
    args: {
        orientation:'vertical'
    }
}

export const HorizontallyVirtualizedWithScrollToSelection: Story = {
    args: {
        orientation: 'horiental'
    }
}

export const OnDemand:Story = {
    args:{
        selectedTable: 'multiple'
    }
}

export const VerticallyVirtualizedWithDynamicHeight: Story = {
    args: {
        orientation:'vertical'
    }
}
export const VerticallyVirtualizedWithFixedHeight: Story = {
    args: {
        orientation:'vertical'
    }
}
export const VerticallyVirtualizedWithScrollToSelection: Story = {
    args: {
        orientation:'vertical'
    }
}

export const WithMultiselect:Story = {
    args:{
        orientation:'horiental'
    }
}

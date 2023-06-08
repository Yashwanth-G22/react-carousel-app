import type { Meta, StoryObj } from '@storybook/react';
import { List } from '../components/list-view/list-view';

const meta = {
    title: 'ListView',
    component: List,
    tags: ['auto-docs'],
    argTypes: {
        orientation: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' }
        },
        selectable: {
            options: ['single', 'multiple', 'none'],
            control: { type: 'radio' }
        },
        items: { control: 'object' },
        hidden: { control: 'boolean' },
        itemHeight: { control: 'number' },
        setRandomSize: { control: 'boolean' },
    }

} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ControlledModeWithOnDemand: Story = {
    args: {
        orientation: 'vertical',
        selectable: 'single',
        hidden: false,
    }
}

export const CustomActionToFetchMore: Story = {
    args: {
        orientation: 'vertical',
        selectable: 'multiple',
        items: [],
        loadMore: true
    }
}

export const Default: Story = {
    args: {
        orientation: 'horizontal',
        hidden: false,
        itemHeight: 123
    }
}

export const DynamicSizeUsingCallbackFunction: Story = {
    args: {
        orientation: 'vertical',
        hidden: false,
        setRandomSize: true,
        dynamicSize: true
    }
}

export const HorizontallyVirtualizedWithDynamicWidth: Story = {
    args: {
        orientation: 'vertical',
        hidden: false,
    }
}
export const HorizontallyVirtualizedWithFixedWidth: Story = {
    args: {
        orientation: 'vertical',
        hidden: false,
    }
}

export const HorizontallyVirtualizedWithScrollToSelection: Story = {
    args: {
        orientation: 'horizontal',
        selectedControl: true
    }
}

export const OnDemand: Story = {
    args: {
        selectable: 'multiple'
    }
}

export const VerticallyVirtualizedWithDynamicHeight: Story = {
    args: {
        orientation: 'vertical'
    }
}
export const VerticallyVirtualizedWithFixedHeight: Story = {
    args: {
        orientation: 'vertical'
    }
}
export const VerticallyVirtualizedWithScrollToSelection: Story = {
    args: {
        orientation: 'vertical',
        selectedControl: true
    }
}

export const WithMultiselect: Story = {
    args: {
        orientation: 'horizontal',
        selectable: 'multiple',
    }
}

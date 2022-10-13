import { Text, TextProps } from './Text'
import {Meta, StoryObj} from '@storybook/react'


export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Text',
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}
export const Medium: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>teste</p>
        )
    }
}
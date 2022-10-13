import { Heading, HeadingProps } from './Heading'
import {Meta, StoryObj} from '@storybook/react'


export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading',
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}
export const Medium: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: false,
        children: (
            <h1>teste</h1>
        )
    }
}
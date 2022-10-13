import {Meta, StoryObj} from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps, TextInputIconProps } from './TextInput'


export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>,
                <TextInput.Input placeholder='Type your email'></TextInput.Input>
            

        ],
    },
    argTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const WhitoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your email'></TextInput.Input>
    }
}
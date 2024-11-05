import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'alkmsdlka askdmlasmdlaskdm aklsdmalksmdlaksmd askdma lsdmalskdmalskdm alksdm laksmdlkasm dlkasm dlkamsdlkam sldk aslkdalksdm laksd',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}

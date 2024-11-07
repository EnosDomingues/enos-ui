import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@enos-ui/react'

export default {
  title: 'Typografy/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti beatae quae optio quam, numquam aperiam! Praesentium rem doloribus dignissimos cumque reprehenderit, eligendi non, facere harum autem, dolor illo consequatur voluptatum!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}

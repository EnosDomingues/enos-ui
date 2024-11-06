import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@enos-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Primary Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the heading is set to `h2`. However, this can be changed using the `as` property.',
      },
    },
  },
}

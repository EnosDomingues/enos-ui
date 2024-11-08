import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@enos-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    // (Story) => {
    //   return (
    //     <Box
    //       as="label"
    //       css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
    //     >
    //       <Text size="sm">username</Text>
    //       {Story({name: 'username'})}
    //     </Box>
    //   )
    // },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'enos.dev/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

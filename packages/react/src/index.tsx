import type { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontWeight: '$bold',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  border: 0,
  cursor: 'pointer',
  color: '$white',

  '&:hover': {
    backgroundColor: '$ignite500',
    transition: 'background-color 0.2s',
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>

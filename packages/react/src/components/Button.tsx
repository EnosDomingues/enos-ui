import type { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  fontSize: 'small',
  fontFamily: '$default',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: '$20',
  padding: '0 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$purple500',

        '&:not(:disabled):hover': {
          color: '$black',
          backgroundColor: '$purple300',
          transition: 'background-color 0.2s, color 0.2s',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$purple500',
        border: '2px solid $purple500',

        '&:not(:disabled):hover': {
          color: '$white',
          backgroundColor: '$purple500',
          transition: 'color 0.2s, background-color 0.2s',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
          transition: 'color 0.2s',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: '$8',
      },

      md: {
        height: '$10',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'

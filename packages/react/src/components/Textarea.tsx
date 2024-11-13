import type { ComponentProps } from 'react'
import { styled } from '../styles'

export const Textarea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: '$20',

  '&:focus': {
    borderColor: '$purple300',
    outline: 'none',
    boxShadow: 'none',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    resize: 'none',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextareaProps extends ComponentProps<typeof Textarea> {}

Textarea.displayName = 'TextArea'

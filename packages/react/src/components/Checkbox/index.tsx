import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxRoot, CheckboxIndicator } from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CheckboxProps extends ComponentProps<typeof CheckboxRoot> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}

Checkbox.displayName = 'Checkbox'

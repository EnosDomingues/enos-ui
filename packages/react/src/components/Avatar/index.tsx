import type { ComponentProps } from 'react'
import { AvatarRoot, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarRoot>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarRoot>
  )
}

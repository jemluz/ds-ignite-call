import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallBack, AvatarImage } from './styles'
import { User } from '@phosphor-icons/react'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallBack delayMs={600}>
        <User />
      </AvatarFallBack>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'

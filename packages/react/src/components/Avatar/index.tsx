import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallBack } from './style'
import { User } from 'phosphor-react'

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

// Native
import { ImgHTMLAttributes } from 'react'
// Styles
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, src, ...rest}: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      {...rest}
    />
  )
}
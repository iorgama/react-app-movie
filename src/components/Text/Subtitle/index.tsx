import React, {FC} from 'react'
import { TEXT } from './style'

interface SubtitleProps {
  color : string,
  text : string,
  size : string
}

export const Subtitle: FC<SubtitleProps> = ({color, text,size}) => {
  return (
      <TEXT color={color} size={size}> {text}</TEXT>
  )
}

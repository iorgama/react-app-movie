import React, {FC} from 'react'
import { H1 } from './style'

interface TitleProps {
  color : string,
  text : string,
}

export const Title: FC<TitleProps> = ({color, text}) => {
  return (
      <H1 color={color}> {text}</H1>
  )
}

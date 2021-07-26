import React, {FC} from 'react'
import { Container } from '../../styles/globalStyle'
import { Title } from './style'

interface ErrorProps {
  msg : string,
}

export const Error: FC<ErrorProps> = ({msg}) => {
  return (
    <Container>
      <Title> {msg}</Title>
    </Container>
  )
}

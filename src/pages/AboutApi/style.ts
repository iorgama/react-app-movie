import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  flex: 1;
`

export const ImageWrapper = styled.div`
  margin: 20px;
  flex: 1;
`
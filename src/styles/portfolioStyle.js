import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-text:center;
  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 10%;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    flex-direction: column;
  }
`

export const Container = styled.div`
`
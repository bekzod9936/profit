import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  @media (max-width: ${device.mobile}) {
    margin-bottom: 50px;
  }
`

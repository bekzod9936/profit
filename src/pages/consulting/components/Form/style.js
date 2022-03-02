import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding-bottom: 20px;
  @media (max-width: ${device.mobile}) {
    padding-bottom: 50px;
  }
`

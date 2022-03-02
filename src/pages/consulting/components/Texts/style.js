import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.div`
  color: white;
  width: 100%;
  font-size: 35px;
  @media (max-width: ${device.mobile}) {
    font-size: 25px;
  }
`

export const Text = styled.div`
  color: white;
  font-size: 25px;
  padding-top: 30px;
  @media (max-width: ${device.mobile}) {
    font-size: 16px;
  }
`

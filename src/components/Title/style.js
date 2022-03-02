import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  color: white;
  display: flex;
  font-size: 50px;
  word-break: break-word;
  justify-content: center;
  @media (max-width: ${device.mobile}) {
    font-size: 30px;
  }
`

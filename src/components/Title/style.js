import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  font-size: 50px;
  word-break: break-word;
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: ${device.mobile}) {
    font-size: 30px;
  }
`

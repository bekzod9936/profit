import { device } from 'utils/style'
import styled from 'styled-components'

export const StyleInput = styled.input`
  outline: none;
  border-radius: 80px;
  height: 70px;
  border: none;
  padding: 0 20px;
  ::placeholder {
    color: #808080;
    font-size: 16px;
    text-transform: uppercase;
  }
  @media (max-width: ${device.mobile}) {
    height: ${({ height }) => (height ? height : '60px')};
  }
`

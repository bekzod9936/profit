import { device } from 'utils/style'
import styled from 'styled-components'

export const StyleButton = styled.button`
  width: fit-content;
  background-color: white;
  color: black;
  border-radius: 80px;
  height: ${({ height }) => (height ? height : '70px')};
  padding: ${({ padding }) => (padding ? padding : '0 30px')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  font-size: 20px;
  cursor: pointer;
  border: none;
  text-transform: capitalize;
  @media (max-width: ${device.mobile}) {
    font-size: 18px;
    height: ${({ height }) => (height ? height : '60px')};
  }
`

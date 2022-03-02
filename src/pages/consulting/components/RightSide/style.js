import styled from 'styled-components'
import { device } from 'utils/style'

export const Container = styled.div`
  width: 30%;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  border-radius: inherit;
  @media (max-width: ${device.mobile}) {
    padding: 20px;
    width: 100%;
    grid-gap: 20px;
    height: 100%;
    flex-grow: 1;
  }
`

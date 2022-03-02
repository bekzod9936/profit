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
  }
`

export const Title = styled.div`
  color: white;
  width: 50%;
  font-size: 30px;
  @media (max-width: ${device.mobile}) {
    font-size: 25px;
  }
`

export const Text = styled.div`
  color: white;
  font-size: 20px;
  @media (max-width: ${device.mobile}) {
    font-size: 16px;
  }
`

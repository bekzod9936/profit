import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  padding: 40px 40px 40px 100px;
  height: 100%;
  @media (max-width: ${device.mobile}) {
    padding: 20px;
    width: 100%;
    align-items: center;
    grid-gap: 30px;
  }
`

export const Title = styled.div`
  color: white;
  font-size: 50px;
  @media (max-width: ${device.mobile}) {
    font-size: 30px;
  }
`

export const Text = styled.div`
  color: white;
  font-size: 30px;
  @media (max-width: ${device.mobile}) {
    font-size: 20px;
  }
`

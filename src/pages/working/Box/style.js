import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.div`
  color: white;
  font-size: 35px;
  padding-left: 50px;
  width: 80%;
  @media (max-width: ${device.mobile}) {
    padding-left: 10px;
    font-size: 18px;
  }
`
export const WrapIcon = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 20px;
  @media (max-width: ${device.mobile}) {
    padding: 10px;
  }
`

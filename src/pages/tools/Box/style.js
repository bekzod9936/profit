import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #6e59b6;
  border-radius: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${device.mobile}) {
    height: 230px;
    max-height: 230px;
    min-height: 230px;
  }
`

export const Title = styled.div`
  color: white;
  font-size: 35px;
  max-width: 80%;
  text-align: center;
  @media (max-width: ${device.mobile}) {
    max-width: 100%;
    font-size: 25px;
  }
`
export const Img = styled.img`
  position: absolute;
  left: 0;
  top: -20px;
  @media (max-width: ${device.mobile}) {
    width: 50px;
    height: 50px;
  }
`

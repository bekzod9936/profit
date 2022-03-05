import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.div`
  color: white;
  font-size: 30px;
  padding-left: 45px;
  line-height: 40px;
  font-weight: 600;
  @media (max-width: ${device.mobile}) {
    padding-left: 30px;
  }

  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    padding-left: 25px;
    font-size: 16px;
    line-height: 22px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    padding-left: 35px;
    font-size: 22px;
    line-height: 30px;
  }
`
export const WrapIcon = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 20px;
  height: fit-content;
  @media (max-width: ${device.desktop}) {
    padding: 10px;
  }
`

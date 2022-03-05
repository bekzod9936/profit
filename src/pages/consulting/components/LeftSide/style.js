import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 35px 33px 69px 109px;
  height: 100%;
  @media (max-width: ${device.mobile}) {
    padding: 80px 30px 40px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    padding: 20px 20px 20px 60px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    padding: 33px 25px 20px 80px;
  }
`

export const Title = styled.div`
  color: white;
  font-size: 50px;
  line-height: 55px;
  font-weight: 800;
  font-family: 'GilroyBold' !important;
  margin-bottom: 50px;

  @media (max-width: ${device.mobile}) {
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 50px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    font-size: 27.907px;
    line-height: 31px;
    margin-bottom: 25px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    font-size: 37.7742px;
    line-height: 42px;
    margin-bottom: 30px;
  }
`

export const Text = styled.div`
  color: white;
  font-size: 30px;
  line-height: 35px;
  font-weight: 600;
  @media (max-width: ${device.mobile}) {
    font-size: 25px;
    line-height: 35px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    font-size: 16.7442px;
    line-height: 20px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    font-size: 22.6645px;
    line-height: 26px;
  }
`
export const WrapTexts = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
`

import { device } from 'utils/style'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 50px;
`

const common = css`
  color: white;
  font-size: 50px;
  text-align: center;
  font-family: 'GilroyBold' !important;
  font-weight: 800;
  line-height: 60px;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    font-size: 35px;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 22px;
  }
`

export const Title1 = styled.div`
  background-color: black;
  border-radius: 20px;
  padding: 10px 20px;
  ${common}

  @media (max-width: ${device.mobile}) {
    width: 90%;
  }
`
export const Title2 = styled.div`
  ${common}
`

export const Wrapper = styled.div`
  width: 90%;
  display: grid;
  max-width: 1140px;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 163px 163px;
  grid-gap: 30px 35px;
  padding-top: 64px;
  justify-content: center;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    grid-template-columns: 40% 40%;
    grid-gap: 25px;
  }
  @media (max-width: ${device.mobile}) {
    grid-template-columns: 100%;
  }
`

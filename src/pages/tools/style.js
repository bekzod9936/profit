import { device } from 'utils/style'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 50px;

  @media (max-width: ${device.mobile}) {
    margin: 70px 0 30px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    margin: 40px 0 10px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    margin: 40px 0 20px;
  }
`

const common = css`
  color: white;
  text-align: center;
  font-family: 'GilroyBold' !important;
  font-weight: 800;
  line-height: 60px;
  font-size: 50px;

  @media (max-width: ${device.mobile}) {
    font-size: 30px;
    line-height: 47px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    font-size: 35px;
    line-height: 55px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    font-size: 40px;
    line-height: 60px;
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
  grid-gap: 50px 35px;
  padding-top: 64px;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(auto, 300px));
  grid-template-rows: repeat(2, minmax(auto, 163px));
  @media (max-width: ${device.mobile}) {
    grid-template-columns: minmax(auto, 420px);
    grid-template-rows: repeat(6, minmax(auto, 230px));
    grid-gap: 100px 0;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    grid-template-columns: repeat(3, minmax(auto, 200px));
    grid-template-rows: repeat(2, minmax(auto, 110px));
    grid-gap: 30px 25px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    grid-template-columns: repeat(3, minmax(auto, 240px));
    grid-template-rows: repeat(2, minmax(auto, 130px));
    grid-gap: 35px 30px;
  }
`

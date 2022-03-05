import { device } from 'utils/style'
import styled, { css } from 'styled-components'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { ReactComponent as LayOut } from 'assets/icons/layout.svg'
import { ReactComponent as Launch } from 'assets/icons/launch.svg'
import { ReactComponent as Analyze } from 'assets/icons/analyze.svg'
import { ReactComponent as Product } from 'assets/icons/product.svg'
import { ReactComponent as Structure } from 'assets/icons/structure.svg'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  height: fit-content;
  flex-direction: column;
`

export const Wrapper = styled.div`
  width: 90%;
  display: grid;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #57576b;
  backdrop-filter: blur(120px);
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.52%,
    rgba(255, 255, 255, 0.024) 104.35%
  );
  backdrop-filter: blur(120px);
  border-radius: 30px;

  grid-gap: 72px 120px;
  padding: 55px 50px;
  margin-top: 70px;
  max-width: 1230px;

  @media (max-width: ${device.mobile}) {
    grid-template-columns: 100%;
    padding: 80px 20px;
    margin-top: 40px;
    grid-gap: 80px 0;
    max-width: 480px;
  }

  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    margin-top: 54px;
    padding: 30px;
    max-width: 690px;
    grid-gap: 40px 30px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    margin-top: 64px;
    padding: 45px 30px;
    max-width: 930px;
    grid-gap: 50px 35px;
  }
`

const icon = css`
  width: 47px;
  height: 47px;
  @media (max-width: ${device.mobile}) {
    width: 47px;
    height: 47px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    width: 25px;
    height: 25px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    width: 35px;
    height: 35px;
  }
`

export const IconPlus = styled(Plus)`
  ${icon}
`
export const IconAnalyze = styled(Analyze)`
  ${icon}
`
export const IconStructure = styled(Structure)`
  ${icon}
`
export const IconProduct = styled(Product)`
  ${icon}
`
export const IconLayOut = styled(LayOut)`
  ${icon}
`
export const IconLaunch = styled(Launch)`
  ${icon}
`

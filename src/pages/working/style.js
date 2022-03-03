import { device } from 'utils/style'
import styled, { css } from 'styled-components'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { ReactComponent as Analyze } from 'assets/icons/analyze.svg'
import { ReactComponent as Structure } from 'assets/icons/structure.svg'
import { ReactComponent as Product } from 'assets/icons/product.svg'
import { ReactComponent as LayOut } from 'assets/icons/layout.svg'
import { ReactComponent as Launch } from 'assets/icons/launch.svg'

const icon = css`
  @media (max-width: ${device.mobile}) {
    width: 25px;
    height: 25px;
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

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  @media (max-width: ${device.mobile}) {
    height: fit-content;
    padding: 50px 0;
  }
`

export const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
  grid-gap: 40px;
  padding: 50px;
  border-radius: 30px;
  border: 1px solid white;
  margin-top: 50px;
  align-items: center;
  background-color: #ffffff10;
  box-shadow: 6px 6px 14px 0 rgba(255, 255, 255, 0.1),
    -6px -6px 14px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: ${device.mobile}) {
    grid-template-columns: 100%;
    padding: 15px;
  }
`

import { device } from 'utils/style'
import styled from 'styled-components'
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  @media (max-width: ${device.mobile}) {
    height: fit-content;
  }
`

export const Wrapper = styled.div`
  width: 90%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40% 40%;
  grid-gap: 90px;
  padding-top: 20px;
  @media (max-width: ${device.mobile}) {
    display: none;
  }
`

export const MobileWrap = styled.div`
  display: flex;
  width: 100%;
  padding-top: 50px;

  @media (min-width: ${device.mobile}) {
    display: none;
  }
`
export const IconArrow = styled(Arrow)`
  transform: ${({ side }) => side === 'left' && 'rotate(-180deg)'};
  width: 50px;
  height: 50px;
`
export const WrapIcon = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ disabled }) => disabled && 'none'};
`

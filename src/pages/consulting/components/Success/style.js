import { device } from 'utils/style'
import styled from 'styled-components'
import { ReactComponent as Success } from 'assets/icons/success.svg'

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`

export const Title = styled.div`
  color: white;
  font-size: 50px;
  font-family: 'GilroyBold' !important;

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

export const IconSuccess = styled(Success)``

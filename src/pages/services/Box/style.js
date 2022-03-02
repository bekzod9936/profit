import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-bottom-right-radius: 130px;
  border: 1px solid #61656b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  position: relative;
  @media (max-width: ${device.mobile}) {
    padding: 20px;
  }
`
export const Title = styled.div`
  color: white;
  font-size: 35px;
  margin-bottom: 20px;
  width: 50%;

  @media (max-width: ${device.mobile}) {
    font-size: 25px;
    width: 100%;
  }
`
export const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 300;
`

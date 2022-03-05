import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 70px;
  border-top: 1px dashed #e5e5e5;
  border-bottom: 1px dashed #e5e5e5;
`
export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  max-width: 1140px;
  border-radius: 30px;
  border: 1px solid white;
  box-shadow: 6px 6px 14px 0 rgba(255, 255, 255, 0.1),
    -6px -6px 14px 0 rgba(255, 255, 255, 0.1);
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    flex-direction: column;
  }
  @media (max-width: ${device.mobile}) {
    flex-direction: column;
  }
`

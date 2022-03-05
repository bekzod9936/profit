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
  border-radius: 30px;
  border: 2px solid #686292;
  backdrop-filter: blur(120px);
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.79%,
    rgba(255, 255, 255, 0.024) 123.08%
  );
  backdrop-filter: blur(120px);
  max-width: 1230px;
  @media (min-width: ${device.mobile}) and (max-width: ${device.desktop}) {
    flex-direction: column;
  }
  @media (max-width: ${device.mobile}) {
    flex-direction: column;
  }
`

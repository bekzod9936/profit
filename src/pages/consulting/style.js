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

  @media (max-width: ${device.mobile}) {
    padding: 35px 0 0;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    padding: 40px 0;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    padding: 40px 0 50px;
  }
`
export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  border-radius: 30px;
  border: 2px solid #686292;
  backdrop-filter: blur(120px);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.79%,
    rgba(255, 255, 255, 0.024) 123.08%
  );
  backdrop-filter: blur(120px);
  max-width: 1230px;

  @media (max-width: ${device.mobile}) {
    flex-direction: column;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    border-radius: 22.6645px;
  }
`

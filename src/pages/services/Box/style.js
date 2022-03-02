import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-bottom-right-radius: 30% 40%;
  border: 1px solid #61656b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  background-color: #ffffff10;
  @media (max-width: ${device.mobile}) {
    padding: 20px;
  }
  @media (min-width: ${device.planshet}) {
    min-height: 240px;
    min-width: 330px;
  }
`
export const Title = styled.div`
  color: white;
  font-size: 35px;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: ${device.desktop}) {
    width: 60%;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 25px;
    width: 100%;
  }
`

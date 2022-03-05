import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  gap: 90px;
  width: 50%;
  display: flex;
  a {
    cursor: pointer;
    font-weight: 400;
    white-space: nowrap;
    color: ${({ color }) => (color ? color : 'white')};
  }

  @media (max-width: ${device.mobile}) {
    width: 100%;
    flex-direction: column;
    align-items: ${({ color }) => (color ? 'flex-end' : 'center')};
    a {
      margin-bottom: 25px;
    }
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    gap: 50px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    gap: 70px;
  }
`

export const linkVariants = {
  hover: {
    scale: 1.1,
  },
}

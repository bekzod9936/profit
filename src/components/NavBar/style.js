import styled from 'styled-components'
import { device } from 'utils/style'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  flex-wrap: wrap;
  white-space: nowrap;
  a {
    color: ${({ color }) => (color ? color : 'white')};
    cursor: pointer;
  }
  @media (max-width: ${device.mobile}) {
    flex-direction: column;
    align-items: ${({ color }) => (color ? 'flex-end' : 'center')};
    width: 100%;
    a {
      margin-bottom: 25px;
    }
  }
`

import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  justify-content: space-around;

  a {
    cursor: pointer;
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
`

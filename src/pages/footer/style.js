import styled from 'styled-components'
import { device } from 'utils/style'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, black 0%, var(--blue) 250%);
`

export const Wrapper = styled.div`
  width: 90%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  @media (max-width: ${device.mobile}) {
    padding: 30px 0;
    height: fit-content;
  }
`

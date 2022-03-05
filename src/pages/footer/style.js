import { device } from 'utils/style'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, black 0%, var(--blue) 250%);
`

export const Wrapper = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${device.mobile}) {
    padding: 30px 0;
    height: fit-content;
  }
`

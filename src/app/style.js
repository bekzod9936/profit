import styled from 'styled-components'
import { device } from 'utils/style'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: black;
`
export const Body = styled.div`
  background: linear-gradient(
    -45deg,
    var(--blue) 0%,
    var(--blue) 20%,
    black 80%,
    black 100%
  );
  @media (max-width: ${device.mobile}) {
    padding-bottom: 50px;
  }
`

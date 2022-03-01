import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`

export const Wrapper = styled.div`
  width: 90%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 90px;
  padding-top: 50px;
`

import styled from 'styled-components'
import { ReactComponent as Menu } from 'assets/icons/menu.svg'
import { ReactComponent as Phone } from 'assets/icons/phone.svg'

export const Container = styled.div``

export const IconMenu = styled(Menu)`
  width: 50px;
  height: 50px;
  & > path {
    fill: ${({ color }) => (color ? color : 'white')};
  }
  margin: ${({ color }) => (color ? '20px 0 30px' : '10px 0 0')};
`
export const IconPhone = styled(Phone)`
  width: 40px;
  height: 40px;
`

export const WrapPhone = styled.div`
  width: fit-content;
  height: fit-content;
  border: 1px solid;
  border-radius: 10px;
  padding: 0 10px;
  position: relative;
  & > p {
    position: absolute;
    top: calc(100% + 5px);
    font-size: 12px;
    left: 0;
  }
`

export const SideDraw = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  min-width: 180px;
  z-index: 20;
  transition: 500ms all;
  box-shadow: -5px 2px 20px rgba(0, 0, 0, 0.06);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-end;
  width: 100%;
  padding: 10px 5vw 10px 10px;
`

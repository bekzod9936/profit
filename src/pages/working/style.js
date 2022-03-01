import styled from 'styled-components';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Analyze } from 'assets/icons/analyze.svg';
import { ReactComponent as Structure } from 'assets/icons/structure.svg';
import { ReactComponent as Product } from 'assets/icons/product.svg';
import { ReactComponent as LayOut } from 'assets/icons/layout.svg';
import { ReactComponent as Launch } from 'assets/icons/launch.svg';

export const IconPlus = styled(Plus)``;
export const IconAnalyze = styled(Analyze)``;
export const IconStructure = styled(Structure)``;
export const IconProduct = styled(Product)``;
export const IconLayOut = styled(LayOut)``;
export const IconLaunch = styled(Launch)``;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 100px;
`;
export const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
  grid-gap: 40px;
  padding: 50px;
  border-radius: 30px;
  border: 1px solid white;
  margin-top: 50px;
  align-items: center;
`;

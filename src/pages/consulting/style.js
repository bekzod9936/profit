import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 100px;
  border-top: 1px dashed #e5e5e5;
  border-bottom: 1px dashed #e5e5e5;
`;
export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-grow: 1;
  border-radius: 30px;
  border: 1px solid white;
  align-items: center;
`;

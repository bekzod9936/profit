import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const Title1 = styled.div`
  color: white;
  background-color: black;
  border-radius: 20px;
  padding: 10px;
  font-size: 50px;
`;
export const Title2 = styled.div`
  color: white;
  font-size: 50px;
`;

export const Wrapper = styled.div`
  width: 90%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 25% 25% 25%;
  grid-gap: 40px;
  padding-top: 50px;
  justify-content: center;
`;
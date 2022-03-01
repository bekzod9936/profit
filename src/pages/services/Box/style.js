import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  background-image: linear-gradient(
    -45deg,
    transparent 10%,
    gray 10%,
    gray 80%,
    gray 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`;
export const Title = styled.div`
  color: white;
  font-size: 35px;
  margin-bottom: 20px;
`;

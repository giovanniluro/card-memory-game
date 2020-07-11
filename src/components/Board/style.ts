import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
 `; 

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
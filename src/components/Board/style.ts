import styled from 'styled-components';

export const Container = styled.div`
  background: #c4cbca;
  padding: 40px;
  border-radius: 12px;
  flex: 1;
 `; 

export const Cards = styled.div`
  @media(min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 20px;
  }

  @media(max-width: 1299px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
  
  @media(max-width: 1050px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
  }

  @media(max-width: 950px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  @media(max-width: 850px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }  

  @media(max-wdth: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
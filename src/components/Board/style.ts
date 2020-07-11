import styled from 'styled-components';

export const Container = styled.div`
  background: #c4cbca;
  padding: 40px;
  border-radius: 12px;
 `; 

export const Cards = styled.div`
  @media(min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 20px;
  }

  @media(max-width: 1199px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
  
  @media(max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
  }

  @media(max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  @media(max-width: 599px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }  
  
`;

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
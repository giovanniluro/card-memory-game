import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  background: #403D39;

  @media(max-width: 730px) {
    padding: 10px;
    flex-direction: column-reverse;
  }
  
`;
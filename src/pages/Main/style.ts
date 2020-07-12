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

export const DifficultySelection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 40px;
  }

  button {
    margin-top: 40px;
    cursor: pointer;
    font-size: 22px;
    padding: 10px 20px;
    min-width: 150px;

    &:hover {
      opacity: 0.5s;
    }

  }
`;
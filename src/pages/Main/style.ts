import styled, { css } from 'styled-components';

interface ContainerProps {
  fade: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  
  ${
    props => props.fade && css`
      animation: fade 1s forwards;
    `
  }

  @media(max-width: 730px) {
    padding: 10px;
    flex-direction: column-reverse;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
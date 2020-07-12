import styled, { css } from 'styled-components';

interface ContainerProps {
  fade: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  padding: 40px;
  
  ${
  props => props.fade && css`
    animation: fade 1s forwards;
    overflow:hidden;
  `
  }

  @media(max-width: 730px) {
    padding: 10px;
    flex-direction: column-reverse;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translatey(100vh);
    }
    to {
      opacity: 1;
      transform: translatey(0);
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

export const Header = styled.header`
  display: flex;
  background: #CCC5B9;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 10px;

  h1 {
    font-size: 24px;
  }

  @media(max-width: 500px){
    justify-content: center;
    span {
      display: none;
    }
  }
`;
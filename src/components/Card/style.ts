import styled, { css } from 'styled-components';

interface ICarta {
  rotate: string;
  hidde: string;
  display: string;
}

export const Container = styled.div`
  position: relative;
  height: 120px;
  width: 80px;
`;

export const Carta = styled.div<ICarta>`
  height: 100%;
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform .5s;

  ${props => props.rotate === 'true' && css `
    transform: rotateY(180deg);
  `}

  ${props => props.hidde === 'true' && css `
    animation: vanish .4s forwards; 
  `}

  ${props => props.display === 'false' && css `
    display: none;
  `}

  @keyframes vanish {
    from {
      transform: translateY(0);
      transform: rotateY(180deg);
      opacity: 1;
    } to {
      transform: rotateY(180deg);
      transform: translateY(-20px);
      opacity: 0;
    }
  }
`;

export const Frente = styled.div`
  height:100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 5px solid #515C67;
  background: white;
  backface-visibility: hidden;
  transform: rotateY(180deg);

`;

export const Verso = styled.div`
  height: 100%;
  width: 100%;
  background: #424B54;
  border: 5px solid #818F9C;
  outline: 5px solid #424B54;
  backface-visibility: hidden;
  position: absolute;
`;
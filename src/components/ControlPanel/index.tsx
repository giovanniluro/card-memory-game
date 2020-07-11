import React from 'react';
import { IMatch } from '../../pages/Main';
import { Container } from './style';
import { FaTrophy } from 'react-icons/fa';

interface ControlPanelProps {
  currentMatch: IMatch;
  bestMatch: IMatch;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ currentMatch, bestMatch }) => {

  return (
    <Container>
      <div className="bestMatch">
        <h1>Melhor Partida:</h1>
        <p>Tempo que demorou: <span>{bestMatch.time}</span></p>
        <p>Fez <span>{bestMatch.totalMoves}</span> jogadas</p>
        <p>Errou de pares <span>{bestMatch.mistakenMoves}</span> vezes</p>
        <FaTrophy size={22} color="yellow" />
      </div> 
      {Object.entries(currentMatch).length > 0 && 
      <div className="currentMatch">
        <h1>Dados da partida:</h1>
        <p>Tempo que demorou: <span>{currentMatch.time}</span></p>
        <p>Fez <span>{currentMatch.totalMoves}</span> jogadas</p>
        <p>Errou de pares <span>{currentMatch.mistakenMoves}</span> vezes</p>
      </div> }
    </Container>
  );
}

export default ControlPanel;
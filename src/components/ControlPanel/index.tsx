import React from 'react';
import { IMatch } from '../../pages/Main';
import { Container } from './style';
import { FaTrophy } from 'react-icons/fa';
import { AiFillCrown } from 'react-icons/ai';

interface ControlPanelProps {
  currentMatch: IMatch;
  bestMatch: IMatch;
  restart: boolean;
  restartGame: (restart:boolean) => void;
  newRecord: boolean;
  setDifficulty: (difficulty: string) => void;
  setFade:(fade: boolean) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ setFade, currentMatch, bestMatch, restart, restartGame,newRecord, setDifficulty}) => {

  return (
    <Container>
      <div className="bestMatch">
        <h1>Melhor Partida:</h1>
        <p>Fez <span>{bestMatch.score}</span> pontos!</p>
        <p>Tempo que demorou: <span>{bestMatch.time}</span></p>
        <p>Fez <span>{bestMatch.totalMoves}</span> jogadas</p>
        <p>Errou de pares <span>{bestMatch.mistakenMoves}</span> vezes</p>
        <FaTrophy size={22} color="yellow" />
      </div> 
      {Object.entries(currentMatch).length > 0 && 
      <div className="currentMatch">
        <h1>Dados da partida:</h1>
        <p>Fez <span>{currentMatch.score}</span> pontos!</p>
        <p>Tempo que demorou: <span>{currentMatch.time}</span></p>
        <p>Fez <span>{currentMatch.totalMoves}</span> jogadas</p>
        <p>Errou de pares <span>{currentMatch.mistakenMoves}</span> vezes</p>
        {newRecord && <><span>Novo Recorde!</span> <AiFillCrown size={22} color="yellow"/></>}
      </div> }
      <div className="buttons">
        <button onClick={() => (restartGame(!restart))}>Recomeçar</button>
        <button onClick={() => {
          setFade(true);
          setDifficulty('select');
        }}> Mudar dificuldade </button>
      </div>
    </Container>
  );
}

export default ControlPanel;
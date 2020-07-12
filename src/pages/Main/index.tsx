import React, { useState, useEffect, useCallback } from 'react';
import { Container, DifficultySelection } from './style';
import Board from '../../components/Board';
import ControlPanel from '../../components/ControlPanel';

export interface IMatch {
  time: string;
  totalMoves: number;
  mistakenMoves: number;
}

const Main: React.FC = () => {

  const [bestMatch, setBestMatch] = useState<IMatch>({
    time: '1:55',
    totalMoves: 42,
    mistakenMoves: 23
  } as IMatch);

  const [currentMatch, setCurrentMatch] = useState<IMatch>({} as IMatch);
  const [restart, setRestart] = useState(false);
  const [newRecord, setNewRecord] = useState(false);
  const [difficulty, setDifficulty] = useState('select');
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [fade, setFade] = useState(false);

  const handleDifficultyChange = useCallback((difficulty: string) => {
    setDifficulty(difficulty);
    setFade(true);

    if(difficulty==='Casual') {
      setNumberOfCards(8);
    }
    else if(difficulty==='Easy') {
      setNumberOfCards(16);
    }
    else if(difficulty==='Medium') {
      setNumberOfCards(24);
    }
    else if(difficulty==='Hard') {
      setNumberOfCards(32);
    }

    setRestart(restart => !restart);

  }, []);

  //voltando a opção de selecionar dificuldade
  useEffect(() => {
    if(difficulty === 'select'){
      setFade(true);
      setNumberOfCards(0);
      setRestart(restart => !restart);
    }
  }, [difficulty]);

  //verificando novo recorde
  useEffect(() => {
    if (Object.entries(currentMatch).length > 0) {
      const [bestMinute, bestSecond] = bestMatch.time.split(':');
      const [currentMinute, currentSecond] = currentMatch.time.split(':');

      if (Number(currentMinute) <= Number(bestMinute) && Number(currentSecond) < Number(bestSecond)) {
        setBestMatch(currentMatch);
        setNewRecord(true);
      }
    } else {
      setNewRecord(false);
    }
  }, [currentMatch, bestMatch.time]);

  return (
    <Container fade={fade} onAnimationEnd={() => setFade(false)}>
      <Board numberOfCards={numberOfCards} setCurrentMatch={setCurrentMatch} restart={restart} />
      {difficulty !== 'select' && <ControlPanel setDifficulty={setDifficulty} currentMatch={currentMatch} bestMatch={bestMatch} restart={restart} restartGame={setRestart} newRecord={newRecord} />}
      {difficulty === 'select' && 
        <DifficultySelection>
          <h1>Escolha uma dificuldade</h1>
          <button onClick={() => handleDifficultyChange('Casual')}>Casual</button>
          <button onClick={() => handleDifficultyChange('Easy')}>Fácil</button>
          <button onClick={() => handleDifficultyChange('Medium')}>Médio</button>
          <button onClick={() => handleDifficultyChange('Hard')}>Difícil</button>
        </DifficultySelection>
      }
    </Container>
  )

}

export default Main;
import React, { useState, useEffect } from 'react';
import { Container } from './style';
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
  }, [currentMatch]);

  return (
    <Container>
      <Board numberOfCards={10} setCurrentMatch={setCurrentMatch} restart={restart} />
      <ControlPanel currentMatch={currentMatch} bestMatch={bestMatch} restart={restart} restartGame={setRestart} newRecord={newRecord} />
    </Container>
  )

}

export default Main;
import React, { useState } from 'react';
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

  return (
    <Container>
      <Board numberOfCards={2} setCurrentMatch={setCurrentMatch} />
      <ControlPanel currentMatch={currentMatch} bestMatch={bestMatch} />
    </Container>
  )

}

export default Main;
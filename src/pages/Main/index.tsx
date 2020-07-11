import React from 'react';
import { Container } from './style';
import Board from '../../components/Board';

const Main: React.FC = () => {

  return (
    <Container>
      <Board numberOfCards={5}/>
    </Container>
  )

}

export default Main;
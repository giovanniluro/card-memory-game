import React, { useState, useCallback } from 'react';
import { Container, Carta, Frente, Verso } from './style';

interface ICard {
  id: string;
  content: number;
}

const Card: React.FC<ICard> = ({content, id }) => {

  const [rotate, setRotate] = useState("false");

  const handleClick = useCallback(() => {

    setRotate("true");
  }, []);

  return(
    <Container>
      <Carta onClick={handleClick} rotate={rotate}>
        <Frente>
          {content}
        </Frente>
        <Verso />
      </Carta>
    </Container>
  )

}

export default Card;
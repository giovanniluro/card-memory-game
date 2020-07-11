import React, { useEffect, useState, useCallback } from 'react';
import Card from '../../components/Card';
import { Container } from './style';
import { uuid } from 'uuidv4';

interface ICard {
  id: string;
  content: number;
}

const Board: React.FC = () => {

  const [cards, setCards] = useState<ICard[]>([]);
  const [cardOne, setCardOne] = useState({});
  const [cardTwo, setCardTwo] = useState({});

  const movement1 = useCallback(async () => {

  }, []);

  useEffect(() => {
    const deck: ICard[] = [];

    for(let i = 0; i < 10; i ++) {
      deck.push({
        content: i,
        id: uuid()
      },
      {
        content: i,
        id: uuid()
      });
    }

    setCards(deck);
  }, []);

  return(
    <Container>
      {cards.map(card => <Card key={card.id} content={card.content} id={card.id} />)}
    </Container>
  )

}

export default Board;
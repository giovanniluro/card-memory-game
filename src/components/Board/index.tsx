import React, { useEffect, useState, useCallback } from 'react';
import Card from '../../components/Card';
import { Container } from './style';
import { uuid } from 'uuidv4';

export interface ICard {
  id: string;
  content: number;
  setRotate?: (rotate: string) => void;
  setHidden?: (hidden: string) => void;
}

const Board: React.FC = () => {

  const [cards, setCards] = useState<ICard[]>([]);
  const [cardOne, setCardOne] = useState<ICard>({} as ICard);
  const [cardTwo, setCardTwo] = useState<ICard>({} as ICard);
  const [rightMoves, setRightMoves] = useState(0);

  useEffect(() => {
    const deck: ICard[] = [];

    for (let i = 0; i < 10; i++) {
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

  useEffect(() => {
    if (Object.entries(cardOne).length !== 0 && Object.entries(cardTwo).length !== 0) {
      if (cardOne.content === cardTwo.content) {
       setTimeout(() => {
         console.log('Cartas iguais...!');
         if( cardOne.setHidden && cardTwo.setHidden ) {
            cardOne.setHidden("true");
            cardTwo.setHidden("true");
            setCardOne({} as ICard);
            setCardTwo({} as ICard);
            setRightMoves(rightMoves => rightMoves + 1);
         }
       }, 1000);

      }
      else {
        setTimeout(() => {
          if (cardOne.setRotate && cardTwo.setRotate) {
            console.log('Cartas diferentes...');
            cardOne.setRotate("false");
            cardTwo.setRotate("false");
            setCardOne({} as ICard);
            setCardTwo({} as ICard);
          }
        }, 1000);
      }
    }
  }, [cardOne, cardTwo]);

  useEffect(() => {
    console.log(rightMoves);
  }, [rightMoves]);

  return (
    <Container>
      {cards.map(card => <Card key={card.id} content={card.content} id={card.id}
        cardOne={cardOne} cardTwo={cardTwo} setCardOne={setCardOne} setCardTwo={setCardTwo} />)}
    </Container>
  )

}

export default Board;
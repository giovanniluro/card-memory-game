import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Container, Cards, Status } from './style';
import { uuid } from 'uuidv4';

export interface ICard {
  id: string;
  content: number;
  setRotate?: (rotate: string) => void;
  setHidden?: (hidden: string) => void;
}

interface BoardProps {
  numberOfCards: number;
}

const Board: React.FC <BoardProps> = ({ numberOfCards }) => {

  const [cards, setCards] = useState<ICard[]>([]);
  const [cardOne, setCardOne] = useState<ICard>({} as ICard);
  const [cardTwo, setCardTwo] = useState<ICard>({} as ICard);
  const [rightMoves, setRightMoves] = useState(0);
  const [clock, setClock] = useState('0:00');

  //Criando o novo deck
  useEffect(() => {
    const deck: ICard[] = [];

    for (let i = 0; i < numberOfCards; i++) {
      deck.push({
        content: i,
        id: uuid()
      },
        {
          content: i,
          id: uuid()
        });
    }
    //deck.sort(() => Math.random() - 0.5);
    setCards(deck);
  }, []);

  //Cronômetro
  useEffect(() => {
    setTimeout(() => {
      const [minutes, seconds] = clock.split(':');
      let second = Number(seconds) + 1;
      let minute = Number(minutes);
      if (second === 60) {
        second = 0;
        minute = minute + 1;
      }
      if(rightMoves !== numberOfCards) setClock(`${minute}:${('0' + second).slice(-2)}`);
    }, 1000);
  }, [clock, rightMoves]);

  //Validando os pares
  useEffect(() => {
    if (Object.entries(cardOne).length !== 0 && Object.entries(cardTwo).length !== 0) {
      if (cardOne.content === cardTwo.content) {
        setTimeout(() => {
          console.log('Cartas iguais...!');
          if (cardOne.setHidden && cardTwo.setHidden) {
            setRightMoves(rightMoves => rightMoves + 1);
            cardOne.setHidden("true");
            cardTwo.setHidden("true");
            setCardOne({} as ICard);
            setCardTwo({} as ICard);
          }
        }, 800);

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
        }, 800);
      }
    }
  }, [cardOne, cardTwo]);

  //Contando quantos pares corretos foram encontrados
  useEffect(() => {
    if (rightMoves === numberOfCards) console.log("você ganhou");
  }, [rightMoves]);

  return (
    <Container>
      <Status>
        {clock}
      </Status>
      <Cards>
        {cards.map(card => <Card key={card.id} content={card.content} id={card.id}
          cardOne={cardOne} cardTwo={cardTwo} setCardOne={setCardOne} setCardTwo={setCardTwo} />)}
      </Cards>
    </Container>
  )

}

export default Board;
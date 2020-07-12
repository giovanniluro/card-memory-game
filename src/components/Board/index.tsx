import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Clock from '../Clock';
import { Container, Cards, Status } from './style';
import { uuid } from 'uuidv4';
import { IMatch } from '../../pages/Main';

export interface ICard {
  id: string;
  content: number;
  setRotate?: (rotate: string) => void;
  setHidden?: (hidden: string) => void;
}

interface BoardProps {
  numberOfCards: number;
  setCurrentMatch: (match: IMatch) => void;
  restart: boolean;
}

const Board: React.FC<BoardProps> = ({ numberOfCards, setCurrentMatch, restart }) => {

  const [cards, setCards] = useState<ICard[]>([]);
  const [cardOne, setCardOne] = useState<ICard>({} as ICard);
  const [cardTwo, setCardTwo] = useState<ICard>({} as ICard);
  const [rightMoves, setRightMoves] = useState(0);
  const [totalMoves, setTotalMoves] = useState(0);
  const [mistakenMoves, setMistakenMoves] = useState(0);
  const [clock, setClock] = useState('0:00');
  const [clockStatus, setClockStatus] = useState<'start' | 'stop' | 'running'>("start");

  //Reiniciando o jogoa
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
    deck.sort(() => Math.random() - 0.5);
    setCards(deck);
    setCardOne({} as ICard);
    setCardTwo({} as ICard);
    setRightMoves(0);
    setTotalMoves(0);
    setMistakenMoves(0);
    setClockStatus('start');
    setCurrentMatch({} as IMatch);
  }, [restart]);

  //Validando os pares
  useEffect(() => {
    if (Object.entries(cardOne).length !== 0 && Object.entries(cardTwo).length !== 0) {
      if (cardOne.content === cardTwo.content) {
        setTimeout(() => {
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
            setMistakenMoves(mistakenMoves => mistakenMoves + 1);
            cardOne.setRotate("false");
            cardTwo.setRotate("false");
            setCardOne({} as ICard);
            setCardTwo({} as ICard);
          }
        }, 800);
      }
      setTotalMoves(totalMoves => totalMoves + 1);
    }
  }, [cardOne, cardTwo]);

  //Contando quantos pares corretos foram encontrados
  useEffect(() => {
    if (rightMoves === numberOfCards) {
      setClockStatus(clockStatus => "stop");
    }
  }, [rightMoves]);

  //Criando log da partida
  useEffect(() => {
    if (clock !== '0:00') {
      const matchDetails = {
        time: clock.toString(),
        totalMoves: totalMoves,
        mistakenMoves: mistakenMoves
      }
      setCurrentMatch(matchDetails);
    }
  }, [clock]);

  //Colocando o relógio pra correr, para que saibamos quando ele foi resetado
  useEffect(() => {
    if (clockStatus === 'start') {
      setClockStatus('running');
    }
  }, [clockStatus]);

  return (
    <Container>
      <Status>
        {numberOfCards !== 0 &&
          <>
            <Clock setTime={setClock} status={clockStatus} />
            <p>Jogadas: {totalMoves}</p>
          </>}
      </Status>
      <Cards>
        {cards.map(card =>
          <div>
            <Card key={card.id} content={card.content} id={card.id}
              cardOne={cardOne} cardTwo={cardTwo} setCardOne={setCardOne} setCardTwo={setCardTwo} />
          </div>)}
      </Cards>
    </Container>
  )

}

export default Board;
import React, { useState, useCallback } from 'react';
import { Container, Carta, Frente, Verso } from './style';
import { ICard } from '../Board';

interface CardProps {
  id: string;
  content: number;
  cardOne: ICard;
  cardTwo: ICard;
  setCardOne: (card: ICard) => void;
  setCardTwo: (card: ICard) => void;
}

const Card: React.FC<CardProps> = ({content, id, cardOne, cardTwo, setCardOne, setCardTwo }) => {

  const [rotate, setRotate] = useState("false");
  const [hidden, setHidden] = useState("false");

  const handleClick = useCallback(() => {
    if(Object.entries(cardOne).length === 0) {
      console.log("setando card 1...");
      setCardOne({id, content, setRotate, setHidden});
      setRotate("true");
      return;
    }

    if(Object.entries(cardTwo).length === 0) {
      if(cardOne){
        if(cardOne.id !== id) {
          console.log("setando card 2...");
          setCardTwo({id, content, setRotate, setHidden});
          setRotate("true");
          return; 
        }
      }
    }

  }, [cardOne, cardTwo]);

  return(
    <Container>
      <Carta onClick={handleClick} rotate={rotate} hidde={hidden}>
        <Frente>
          {content}
        </Frente>
        <Verso />
      </Carta>
    </Container>
  )

}

export default Card;
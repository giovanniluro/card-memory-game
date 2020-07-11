import React, { useState, useCallback } from 'react';
import { Container, Carta, Frente, Verso } from './style';
import { ICard } from '../Board';
import { FiAperture, FiAnchor, FiAward, FiBookOpen, FiCoffee, FiEdit2, FiEye, FiFeather, FiFlag, FiGift, FiSmile, FiGithub, FiHeadphones, FiHeart, FiUmbrella, FiMusic, FiMoon, FiSun, FiTarget, FiTruck } from 'react-icons/fi';

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
  const [display, setDisplay] = useState("true");

  const handleClick = useCallback(() => {
    if(Object.entries(cardOne).length === 0) {
      setCardOne({id, content, setRotate, setHidden});
      setRotate("true");
      return;
    }

    if(Object.entries(cardTwo).length === 0) {
      if(cardOne){
        if(cardOne.id !== id) {
          setCardTwo({id, content, setRotate, setHidden});
          setRotate("true");
          return; 
        }
      }
    }

  }, [cardOne, cardTwo, content, id, setCardTwo, setCardOne]);

  return(
    <Container>
      <Carta onClick={handleClick} display={display} rotate={rotate} hidde={hidden} onAnimationEnd= {
        (e) => {if(e.animationName === 'vanish') setDisplay("false")}
      }>
        <Frente>
          {content === 0 && <FiAperture size={20} />}
          {content === 1 && <FiAnchor size={20} />}
          {content === 2 && <FiCoffee size={20} />}
          {content === 3 && <FiAward size={20} />}
          {content === 4 && <FiBookOpen size={20} />}
          {content === 5 && <FiEdit2 size={20} />}
          {content === 6 && <FiEye size={20} />}
          {content === 7 && <FiFeather size={20} />}
          {content === 8 && <FiFlag size={20} />}
          {content === 9 && <FiGift size={20} />}
          {content === 10 && <FiSmile size={20} />}
          {content === 11 && <FiGithub size={20} />}
          {content === 12 && <FiHeadphones size={20} />}
          {content === 13 && <FiHeart size={20} />}
          {content === 14 && <FiMoon size={20} />}
          {content === 15 && <FiUmbrella size={20} />}
          {content === 16 && <FiMusic size={20} />}
          {content === 17 && <FiSun size={20} />}
          {content === 18 && <FiTarget size={20} />}
          {content === 19 && <FiTruck size={20} />}
        </Frente>
        <Verso />
      </Carta>
    </Container>
  )

}

export default Card;
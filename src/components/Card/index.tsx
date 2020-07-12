import React, { useState, useCallback } from 'react';
import { Container, Carta, Frente, Verso } from './style';
import { ICard } from '../Board';
import { FiAperture, FiAnchor, FiAward, FiBookOpen, FiCoffee, FiEdit2, FiEye, FiFeather, FiFlag, FiGift, FiSmile, FiGithub, FiHeadphones, FiHeart, FiUmbrella, FiMusic, FiMoon, FiSun, FiTarget, FiTruck, FiZap, FiX, FiWatch, FiVideo, FiUnlock, FiTwitter, FiTrash2, FiStar, FiSlack, FiPaperclip, FiMail, FiMap, FiKey } from 'react-icons/fi';

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
          {content === 0 && <FiAperture size={34} />}
          {content === 1 && <FiAnchor size={34} />}
          {content === 2 && <FiCoffee size={34} />}
          {content === 3 && <FiAward size={34} />}
          {content === 4 && <FiBookOpen size={34} />}
          {content === 5 && <FiEdit2 size={34} />}
          {content === 6 && <FiEye size={34} />}
          {content === 7 && <FiFeather size={34} />}
          {content === 8 && <FiFlag size={34} />}
          {content === 9 && <FiGift size={34} />}
          {content === 10 && <FiSmile size={34} />}
          {content === 11 && <FiGithub size={34} />}
          {content === 12 && <FiHeadphones size={34} />}
          {content === 13 && <FiHeart size={34} />}
          {content === 14 && <FiMoon size={34} />}
          {content === 15 && <FiUmbrella size={34} />}
          {content === 16 && <FiMusic size={34} />}
          {content === 17 && <FiSun size={34} />}
          {content === 18 && <FiTarget size={34} />}
          {content === 19 && <FiTruck size={34} />}
          {content === 34 && <FiZap size={34} />}
          {content === 21 && <FiX size={34} />}
          {content === 22 && <FiWatch size={34} />}
          {content === 23 && <FiVideo size={34} />}
          {content === 24 && <FiUnlock size={34} />}
          {content === 25 && <FiTwitter size={34} />}
          {content === 26 && <FiTrash2 size={34} />}
          {content === 27 && <FiStar size={34} />}
          {content === 28 && <FiSlack size={34} />}
          {content === 29 && <FiPaperclip size={34} />}
          {content === 30 && <FiMap size={34} />}
          {content === 31 && <FiMail size={34} />}
          {content === 32 && <FiKey size={34} />}
        </Frente>
        <Verso />
      </Carta>
    </Container>
  )

}

export default Card;
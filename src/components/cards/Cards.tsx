import  { FC, ReactNode } from "react";
import styles from './Cards.module.css';

interface CardsProps {
  children: ReactNode;
}

const Cards: FC<CardsProps> = ({ children }) => {
  const {cards} = styles;
  return <div className={cards}>{children}</div>;
};

export default Cards;

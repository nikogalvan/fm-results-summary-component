import  { FC, ReactNode } from "react";

interface CardsProps {
  children: ReactNode;
}

const Cards: FC<CardsProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Cards;

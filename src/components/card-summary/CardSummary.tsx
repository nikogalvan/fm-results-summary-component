import { SUMMARY_INFO } from "../../constants/summary-info";
import Button from "../button/Button";
import CardSkill from "../card-skill/CardSkill";
import styles from "./CardSummary.module.css";

const CardSummary = () => {
  const { card, cardTitle } = styles;
  return (
    <div className={card}>
      <h2 className={cardTitle}>Summary</h2>
      {SUMMARY_INFO.map((item) => (
        <CardSkill {...item} key={item.id} />
      ))}
      <Button>Continue</Button>
    </div>
  );
};

export default CardSummary;

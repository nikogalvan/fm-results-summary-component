import { SummaryItem } from "../../types";
import styles from "./CardSkill.module.css";

const CardSkill = ({ color, category, icon, score }: SummaryItem) => {
  const {
    summaryItem,
    summaryItemPoints,
    summaryItemTitle,
    summaryItemIconTitle,
    value,
    total,
  } = styles;
  return (
    <div className={`${summaryItem} ${styles["skill-" + color]} `}>
      <div className={summaryItemTitle}>
        <img className={summaryItemIconTitle} src={icon} alt={category} />
        <span>{category}</span>
      </div>

      <div className={summaryItemPoints}>
        <span className={value}>{score}</span>
        <span className={total}> / 100</span>
      </div>
    </div>
  );
};

export default CardSkill;

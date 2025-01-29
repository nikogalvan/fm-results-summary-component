import { SUMMARY_INFO } from "../../constants/summary-info";

const CardSummary = () => {
  return (
    <div>
      <h2>Summary</h2>
      {SUMMARY_INFO.map((summaryItem) => (
        <div key={summaryItem.id}>
          <img src={summaryItem.icon} alt={summaryItem.category} />
          <span>{summaryItem.category}</span>
          <span>{summaryItem.score}</span>
          <span>/ 100</span>
        </div>
      ))}
    </div>
  );
};

export default CardSummary;

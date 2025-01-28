import styles from "./card-results.module.css";

const CardResults = () => {
  const { card, title, circle, circleMain, circleSecondary, resultMessage, description } = styles;


  return (
    <div className={card}>
      <h2 className={title}>Your Result</h2>
      <div className={circle}>
        <span className={circleMain} >76</span>
        <span className={circleSecondary}>of 100</span>
      </div>
      <span className={resultMessage}>Great</span>
      <p className={description}>
        You scored higher than 65% of the people who
        have taken these tests.
      </p>
    </div>
  );
};

export default CardResults;

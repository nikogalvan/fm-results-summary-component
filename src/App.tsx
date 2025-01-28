import CardResults from "./components/card-results/CardResults";
import CardSummary from "./components/card-summary/CardSummary";
import Cards from "./components/cards/Cards";

const App = () => {
  return (
    <>
      <Cards>
        <CardResults />
      </Cards>
      <Cards>
        <CardSummary />
      </Cards>
    </>
  );
};

export default App;

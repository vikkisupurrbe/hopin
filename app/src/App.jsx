import { useEffect, useContext } from "react";
import BeerList from "./components/BeerList";
import BeerCreate from "./components/BeerCreate";
import BeersContext from "./context/beers";

function App() {
  const {fetchBeers} = useContext(BeersContext);

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  return <div>
    <h1>Welcome to Hopin!</h1>
    <p>"— Hop in. Sip. Rate. Repeat."</p>
    <BeerCreate />
    <BeerList />
  </div>;
}

export default App;
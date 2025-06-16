import { useState } from "react";
import BeerList from "./components/BeerList";
import beerData from './data/beers.json';


function App() {
  const [beers, setBeers] = useState(beerData);

  return <div>
    <h1>Welcome to Hopin!</h1>
    <BeerList beers={beers} />
  </div>;
}

export default App;
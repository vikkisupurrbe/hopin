import { useContext } from "react";
import BeersContext from "../context/beers";
import BeerCard from "./BeerCard";

function BeerList() {
  const { beers } = useContext(BeersContext);

  const renderedBeers = beers.map((beer) => {
    return <BeerCard key={beer.id} beer={beer} />
  })

  return (
    <div>
      <h2>All the craft beers we have reviewed:</h2>
      <div className='beer-list'>{renderedBeers}</div>
    </div>
  )
}

export default BeerList;
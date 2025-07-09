import BeerCard from "./BeerCard";
import useBeersContext from "../hooks/useBeersContext";

function BeerList() {
  const { beers } = useBeersContext();

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
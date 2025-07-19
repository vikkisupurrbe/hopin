import BeerCard from "./BeerCard";
import useBeersContext from "../hooks/useBeersContext";

function BeerList() {
  const { beers } = useBeersContext();

  const renderedBeers = beers.map((beer) => {
    return <BeerCard key={beer.id} beer={beer} />
  })

  return (
    <div>
      <h2 className="font-title font-semibold text-2xl md:text-3xl text-[#8b5e3c] mt-6 mb-2">
        All the craft beers we have reviewed:
      </h2>
      <div className='beer-list'>{renderedBeers}</div>
    </div>
  )
}

export default BeerList;
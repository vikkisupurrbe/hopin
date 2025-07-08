import BeerCard from "./BeerCard";

function BeerList({ beers, onDelete, onEdit }) {
  const renderedBeers = beers.map((beer) => {
    return <BeerCard key={beer.id} beer={beer} onDelete={onDelete} onEdit={onEdit} />
  })

  return (
    <div>
      <h2>All the craft beers we have reviewed:</h2>
      <div className='beer-list'>{renderedBeers}</div>
    </div>
  )
}

export default BeerList;
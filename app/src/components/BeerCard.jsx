function BeerCard({ beer }) {
  return <div>
    <h4>{beer.name}</h4>
    <p>{beer.brewery}</p>
    <p>{beer.rating}</p>
  </div>;
}

export default BeerCard;
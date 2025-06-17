import BeerCard from "./BeerCard";

function BeerList({ beers }) {
  return (
    <div>
      <h2>All the craft beers we have reviewed:</h2>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <BeerCard beer={beer} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BeerList;
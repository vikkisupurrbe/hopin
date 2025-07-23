import { useState } from "react";
import BeerCard from "./BeerCard";
import useBeersContext from "../hooks/useBeersContext";

function BeerList() {
  const { beers } = useBeersContext();
  const [sortOption, setSortOption] = useState("brewery-asc");

  // Sorting logic
  const sortedBeers = [...beers].sort((a, b) => {
    if (sortOption === "brewery-asc") {
      return a.brewery.localeCompare(b.brewery);
    } else if (sortOption === "brewery-desc") {
      return b.brewery.localeCompare(a.brewery);
    } else if (sortOption === "rating-asc") {
      return a.rating - b.rating;
    } else if (sortOption === "rating-desc") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const renderedBeers = sortedBeers.map((beer) => {
    return <BeerCard key={beer.id} beer={beer} />
  })

  return (
    <div>
      <h2 className="font-title font-semibold text-2xl md:text-3xl text-[#8b5e3c] mt-6 mb-2">
        All the craft beers we have reviewed:
      </h2>

      {/* Sorting Options */}
      <div className="mb-4">
        <label className="font-body font-medium text-base mr-2">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
        >
          <option value="brewery-asc">Brewery (A-Z)</option>
          <option value="brewery-desc">Brewery (Z-A)</option>
          <option value="rating-asc">Rating (Ascending)</option>
          <option value="rating-desc">Rating (Descending)</option>
        </select>
      </div>

      <div className='beer-list'>{renderedBeers}</div>
    </div>
  )
}

export default BeerList;
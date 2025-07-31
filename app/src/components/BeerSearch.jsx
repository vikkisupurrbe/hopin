import { useState } from "react";

function BeerSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search beer or brewery"
      value={searchTerm}
      onChange={handleSearchTermChange}
      className="flex-grow border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
    />
  )
}

export default BeerSearch;
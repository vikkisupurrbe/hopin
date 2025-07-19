import { useState } from 'react';
import useBeersContext from '../hooks/useBeersContext';
import Button from './Button';

function BeerEdit({ beer, onSubmit }) {
  const [name, setName] = useState(beer.name);
  const [brewery, setBrewery] = useState(beer.brewery);
  const [rating, setRating] = useState(beer.rating);

  const { editBeerById } = useBeersContext();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBreweryChange = (event) => {
    setBrewery(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBeerById(beer.id, name, brewery, rating)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-title font-semibold text-xl text-[#8b5e3c] mb-4">
        Edit Beer
      </h3>
      <label className="font-body font-medium text-base block mb-1">
        Name:
      </label>
      <input
        value={name}
        onChange={handleNameChange}
        className="w-full border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
      />
      <label className="font-body font-medium text-base block mb-1">
        Brewery:
      </label>
      <input
        value={brewery}
        onChange={handleBreweryChange}
        className="w-full border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
      />
      <label className="font-body font-medium text-base block mb-1">
        Rating:
      </label>
      <input
        value={rating}
        onChange={handleRatingChange}
        className="w-full border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
      />
      <Button primary rounded className="font-body font-medium text-base">
        Save
      </Button>
    </form>
  );
};

export default BeerEdit;
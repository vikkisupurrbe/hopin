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
      <div className="flex items-center gap-x-2">
        <label className="font-body font-medium text-base w-16 text-left">
          Name:
        </label>
        <input
          value={name}
          onChange={handleNameChange}
          className="flex-grow border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
        />
      </div>
      <div className="flex items-center gap-x-2">
        <label className="font-body font-medium text-base w-16 text-left">
          Brewery:
        </label>
        <input
          value={brewery}
          onChange={handleBreweryChange}
          className="flex-grow border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
        />
      </div>
      <div className="flex items-center gap-x-2">
        <label className="font-body font-medium text-base w-16 text-left">
          Rating:
        </label>
        <input
          value={rating}
          onChange={handleRatingChange}
          className="flex-grow border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
        />
      </div>

      <Button primary rounded className="font-body font-medium text-base">
        Save
      </Button>
    </form>
  );
};

export default BeerEdit;
import { useState } from 'react';
import useBeersContext from '../hooks/useBeersContext';
import Button from './Button';

function BeerCreate() {
  const [name, setName] = useState('');
  const [brewery, setBrewery] = useState('');
  const [rating, setRating] = useState('');

  const { createBeer } = useBeersContext();

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
    createBeer(name, brewery, Number(rating)); // convert to number
    setName('');
    setBrewery('');
    setRating('');
  };

  return (
    <div className="beer-card max-w-lg mx-auto border border-[#d9b99b] rounded-lg mb-4 p-4">
      <h3 className="font-title font-semibold text-2xl md:text-3xl text-[#8b5e3c] mb-6">
        Add a Beer
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-body font-medium text-base block mb-1">
            Name:
          </label>
          <input
            value={name}
            onChange={handleNameChange}
            className="w-full border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
          />
        </div>
        <div>
          <label className="font-body font-medium text-base block mb-1">
            Brewery:
          </label>
          <input
            value={brewery}
            onChange={handleBreweryChange}
            className="w-full border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
          />
        </div>
        <div>
          <label className="font-body font-medium text-base block mb-1">
            Rating:
          </label>
          <input
            value={rating}
            onChange={handleRatingChange}
            className="w-full border border-[#d9b99b] rounded-lg p-2 font-body text-sm"
          />
        </div>
        <div className="actions flex justify-center">
          <Button primary rounded className="font-body font-medium text-base">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
};

export default BeerCreate;
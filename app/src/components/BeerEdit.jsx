import { useState } from 'react';
import useBeersContext from '../hooks/useBeersContext';

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
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input value={name} onChange={handleNameChange} />
      <label>Brewery: </label>
      <input value={brewery} onChange={handleBreweryChange} />
      <label>Rating: </label>
      <input value={rating} onChange={handleRatingChange} />
      <button>Save</button>
    </form>
  );
};

export default BeerEdit;
import { useState } from 'react';
import useBeersContext from '../hooks/useBeersContext';

function BeerCreate () {
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
    <div>
      <h3>Add a Beer</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input value={name} onChange={handleNameChange} />
        <label>Brewery: </label>
        <input value={brewery} onChange={handleBreweryChange} />
        <label>Rating: </label>
        <input value={rating} onChange={handleRatingChange} />
        <button>Submit</button>
      </form>
    </div>
  )
};

export default BeerCreate;
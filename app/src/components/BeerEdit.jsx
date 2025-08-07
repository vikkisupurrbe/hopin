import { useState } from 'react';
import useBeersContext from '../hooks/useBeersContext';
import Button from './Button';

function BeerEdit({ beer, onSubmit }) {
  const [name, setName] = useState(beer.name);
  const [brewery, setBrewery] = useState(beer.brewery);
  const [rating, setRating] = useState(beer.rating);
  const [errors, setErrors] = useState({});

  const { editBeerById } = useBeersContext();

  // Form handlers
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBreweryChange = (event) => {
    setBrewery(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!brewery.trim()) {
      newErrors.brewery = "Brewery is required";
      isValid = false;
    }

    if (!rating) {
      newErrors.rating = "Rating is required";
      isValid = false;
    } else {
      const ratingNum = Number(rating);
      if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
        newErrors.rating = "Rating must be a number between 1 and 5";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit();
      editBeerById(beer.id, name, brewery, rating);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-title font-semibold text-xl text-[#8b5e3c] mb-4">
        Edit Beer
      </h3>
      {/* Name Field */}
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2">
          <label className="font-body font-medium text-base w-16 text-left">
            Name:
          </label>
          <input
            value={name}
            onChange={handleNameChange}
            className={`flex-grow border ${errors.name ? 'border-[#c17767]' : 'border-[#d9b99b]'
              } rounded-lg p-2 font-body text-sm`}
          />
        </div>
        {errors.name && (
          <p className="pl-[4.5rem] mt-1 text-[#c17767] text-xs font-body">
            {errors.name}
          </p>
        )}
      </div>
      {/* Brewery Field */}
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2">
          <label className="font-body font-medium text-base w-16 text-left">
            Brewery:
          </label>
          <input
            value={brewery}
            onChange={handleBreweryChange}
            className={`flex-grow border ${errors.brewery ? 'border-[#c17767]' : 'border-[#d9b99b]'
              } rounded-lg p-2 font-body text-sm`}
          />
        </div>
        {errors.brewery && (
          <p className="pl-[4.5rem] mt-1 text-[#c17767] text-xs font-body">
            {errors.brewery}
          </p>
        )}
      </div>
      {/* Rating Field */}
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2">
          <label className="font-body font-medium text-base w-16 text-left">
            Rating:
          </label>
          <input
            type="number"
            min="1"
            max="5"
            step="0.5"
            value={rating}
            onChange={handleRatingChange}
            className={`flex-grow border ${errors.rating ? 'border-[#c17767]' : 'border-[#d9b99b]'
              } rounded-lg p-2 font-body text-sm`}
          />
        </div>
        {errors.rating && (
          <p className="pl-[4.5rem] mt-1 text-[#c17767] text-xs font-body">
            {errors.rating}
          </p>
        )}
      </div>

      <Button primary rounded className="font-body font-medium text-base">
        Save
      </Button>
    </form>
  );
};

export default BeerEdit;
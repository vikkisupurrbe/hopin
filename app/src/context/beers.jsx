import { createContext, useState } from "react";
import axios from 'axios';

const BeersContext = createContext();

function Provider({ children }) {
  const [beers, setBeers] = useState([]);

  // Fetch beer data when the app is first loaded on to the screen
  const fetchBeers = async () => {
    const response = await axios.get('http://localhost:3002/beers');
    setBeers(response.data);
  };

  // Edit beer
  const editBeerById = async (id, newName, newBrewery, newRating) => {
    const response = await axios.put(`http://localhost:3002/beers/${id}`, {
      name: newName,
      brewery: newBrewery,
      rating: newRating
    });

    const updatedBeers = beers.map((beer) => {
      if (beer.id === id) {
        return {
          ...beer,
          ...response.data
        };
      }
      return beer;
    })
    setBeers(updatedBeers);
  };

  // Delete beer
  const deleteBeerById = async (id) => {
    await axios.delete(`http://localhost:3002/beers/${id}`);

    const updatedBeers = beers.filter((beer) => {
      return beer.id !== id;
    })
    setBeers(updatedBeers);
  };

  // Create beer
  const createBeer = async (name, brewery, rating) => {
    const response = await axios.post('http://localhost:3002/beers', {
      name, brewery, rating
    });

    console.log(response);

    const updatedBeers = [
      ...beers,
      response.data
    ];
    setBeers(updatedBeers);
  };

  const valueToShare = {
    beers,
    deleteBeerById,
    editBeerById,
    createBeer,
    fetchBeers
  };

  return <BeersContext.Provider value={valueToShare}>
    {children}
  </BeersContext.Provider>
};

export { Provider };
export default BeersContext;
import { useState, useEffect } from "react";
import axios from 'axios';
import BeerList from "./components/BeerList";
import BeerCreate from "./components/BeerCreate";


function App() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    const response = await axios.get('http://localhost:3002/beers');
    setBeers(response.data);
  }

  useEffect (() => {
    fetchBeers();
  }, []);

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
  }

  return <div>
    <h1>Welcome to Hopin!</h1>
    <p>"— Hop in. Sip. Rate. Repeat."</p>
    <BeerCreate onCreate={createBeer} />
    <BeerList beers={beers} />
  </div>;
}

export default App;
import { useEffect, useContext } from "react";
import BeerList from "./components/BeerList";
import BeerCreate from "./components/BeerCreate";
import BeersContext from "./context/beers";

function App() {
  const { fetchBeers } = useContext(BeersContext);

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  return (
    <div className="min-h-screen px-6 py-8">
      <header className="text-center mb-12">
        <h1 className="font-title font-bold text-4xl md:text-5xl text-[#8b5e3c] mb-2">Welcome to Hopin!</h1>
        <p className="font-title font-light text-xl md:text-2xl italic mb-8">
          "— Hop in. Sip. Rate. Repeat."
        </p>
        <BeerCreate />
        <BeerList />
      </header>
    </div>

  );
}

export default App;
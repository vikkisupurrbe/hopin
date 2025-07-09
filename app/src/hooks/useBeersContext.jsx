import { useContext } from "react";
import BeersContext from "../context/beers";

function useBeersContext() {
  return useContext(BeersContext);
};

export default useBeersContext;
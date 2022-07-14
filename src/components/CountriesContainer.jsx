import React, { useContext } from "react";
import CountryCard from "./CountryCard";
import Loader from "./Loader";
import { CountryContext } from "../context/CountryStateProvider";

const CountriesContainer = () => {
  const { countries, loading } = useContext(CountryContext);

  return (
    <div className="countries-container">
      {loading ? (
        <Loader />
      ) : (
        countries.map((country) => {
          return <CountryCard key={country.name.common} country={country} />;
        })
      )}
    </div>
  );
};

export default CountriesContainer;

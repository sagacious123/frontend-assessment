import React from "react";
import CountryCard from "./CountryCard";
import Loader from "./Loader";

const CountriesContainer = ({ countries, loading }) => {
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

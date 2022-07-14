import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CountryContext = createContext();

const CountryStateProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  //   useEffect(() => {
  //     setLoading(true);

  //     axios
  //       .get("https://restcountries.com/v3.1/all")
  //       .then((response) => {
  //         setLoading(false);
  //         setCountries(response.data);
  //       })
  //       .catch((error) => {
  //         setLoading(false);
  //         alert(error.response.data.message);
  //       });
  //   }, []);

  useEffect(() => {
    if (search !== "") {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((response) => {
          setCountries(response.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    } else {
        
      setLoading(true);

      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          setLoading(false);
          setCountries(response.data);
        })
        .catch((error) => {
          setLoading(false);
          alert(error.response.data.message);
        });
    }
  }, [search]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        loading,
        setLoading,
        search,
        setSearch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryStateProvider;

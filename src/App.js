import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CountriesContainer from "./components/CountriesContainer";
import Input from "./components/Input";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (search !== "") {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((response) => {
          console.log(response.data);
          setCountries(response.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  }, [search]);

  return (
    <div className="App">
      <div className="container">
        <Input search={search} setSearch={setSearch} />
        <CountriesContainer countries={countries} loading={loading} />
      </div>
    </div>
  );
}

export default App;

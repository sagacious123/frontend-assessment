import "./App.css";
import CountriesContainer from "./components/CountriesContainer";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Input />
        <CountriesContainer />
      </div>
    </div>
  );
}

export default App;

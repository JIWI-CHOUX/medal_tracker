import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CountryTable from "./components/CountryTable";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const addCountry = () => {
    if (countries.find((eventCountry) => eventCountry.name.toLowerCase() === country.toLowerCase())) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    const newCountry = {
      name: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    setCountries([...countries, newCountry]);
  };

  const updateCountries = () => {
    setCountries(countries.map((eventCountry) =>
      eventCountry.name.toLowerCase() === country.toLowerCase()
        ? { name: country, gold: gold, silver: silver, bronze: bronze }
        : eventCountry
    ));
  };

  const deleteCountry = (name) => {
    setCountries(countries.filter((eventCountry) => eventCountry.name.toLowerCase() !== name.toLowerCase()));
  };

  return (
    <div className="main-container">
      <h1>2024 파리 올림픽 메달 리스트</h1>
      <Form
        country={country}
        setCountry={setCountry}
        gold={gold}
        setGold={setGold}
        silver={silver}
        setSilver={setSilver}
        bronze={bronze}
        setBronze={setBronze}
        addCountry={addCountry}
        updateCountries={updateCountries}
      />
      <div className="table-wrapper">
        <CountryTable countries={countries} deleteCountry={deleteCountry} />
      </div>
    </div>
  );
};

export default App;

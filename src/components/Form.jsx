import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const Form = ({ country, setCountry, gold, setGold, silver, setSilver, bronze, setBronze, addCountry, updateCountries }) => {
  return (
    <form className="input-form" onSubmit={(e) => e.preventDefault()}>
      <InputField label="국가명" id="country" value={country} onChange={(event) => setCountry(event.target.value)} />
      <InputField label="금메달" id="gold" value={gold} onChange={(event) => setGold(event.target.value)} />
      <InputField label="은메달" id="silver" value={silver} onChange={(event) => setSilver(event.target.value)} />
      <InputField label="동메달" id="bronze" value={bronze} onChange={(event) => setBronze(event.target.value)} />
      <div className="button-group">
        <Button type="button" onClick={addCountry}>국가추가</Button>
        <Button type="button" onClick={updateCountries}>수정하기</Button>
      </div>
    </form>
  );
};

export default Form;

import React from "react";

const CountryTable = ({ countries, deleteCountry }) => {
  if (countries.length === 0) {
    return <p>등록된 국가가 없습니다.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <tr key={country.name}>
            <td>{country.name}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td>
              <button onClick={() => deleteCountry(country.name)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountryTable;

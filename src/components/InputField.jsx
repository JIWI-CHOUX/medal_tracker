import React from "react";

const InputField = ({ label, id, value, onChange }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;

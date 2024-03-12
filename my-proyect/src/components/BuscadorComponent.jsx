import React, { useState } from "react";

const BuscadorComponent = ({ handleBuscar }) => {
  const [buscarInput, setBuscarInput] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setBuscarInput(inputValue);
    handleBuscar(inputValue);
  };

  return (
    <div className="search">
      <input
      className="form-control"
        onChange={handleInputChange}
        value={buscarInput}
        type="text"
        placeholder="Search.."
      />
    </div>
  );
};

export default BuscadorComponent;
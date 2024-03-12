import React, { useState } from "react";
import TableComponent from "./components/TableComponent";
import BuscadorComponent from "./components/BuscadorComponent";
import './App.css'

function App() {
  const [buscarInput, setBuscarInput] = useState("");

  const Personas = [

    {id: "1",nombre: "Maria",apellido: "Peralta",descripcion: "Locura total"},
    { id: "2", nombre: "Juan", apellido: "Angulo", descripcion: "Casa de campo" },
    { id: "3", nombre: "Mar", apellido: "Rivera", descripcion: "Paris" }
  ];

  const handleBuscar = (inputValue) => {
    setBuscarInput(inputValue);
  };

  const filteredPersonas = Personas.filter(
    (persona) => persona.id.toLowerCase().includes(buscarInput.toLowerCase()) ||
      persona.nombre.toLowerCase().includes(buscarInput.toLowerCase()) ||
      persona.apellido.toLowerCase().includes(buscarInput.toLowerCase()) ||
      persona.descripcion.toLowerCase().includes(buscarInput.toLowerCase())
  );

  return (
    <>
      <BuscadorComponent handleBuscar={handleBuscar} />
      <TableComponent Personas={filteredPersonas} />
    </>
  );
}

export default App;
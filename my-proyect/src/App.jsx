import React, { useState, useEffect, useContext } from "react";
import TableComponent from "./components/TableComponent";
import BuscadorComponent from "./components/BuscadorComponent";
import SelectComponent from "./components/SelectComponent";
import { GeneralContext } from "./context/GeneralContext";
import "./App.css";

function App() {
  const [buscarInput, setBuscarInput] = useState("");
  const { seleccion } = useContext(GeneralContext);
  const Personas = [
    { id: "1", nombre: "Maria", apellido: "Peralta", descripcion: "Locura total" },
    { id: "2", nombre: "Juan", apellido: "Angulo", descripcion: "Casa de campo" },
    { id: "3", nombre: "Mar", apellido: "Rivera", descripcion: "Paris" },
    { id: "4", nombre: "Luis", apellido: "Zapata", descripcion: "Argentina" },
    { id: "5", nombre: "Valentina", apellido: "Martinez", descripcion: "Fuera de lugar" },
    { id: "6", nombre: "Marta", apellido: "Quintero", descripcion: "Cristiana" },
    { id: "7", nombre: "Jose", apellido: "Ruiz", descripcion: "Jugador" },
    { id: "8", nombre: "Brianna", apellido: "Angulo", descripcion: "Bebe chiquita" },
    { id: "9", nombre: "Andres", apellido: "Calamaro", descripcion: "Cantante" },
    { id: "10", nombre: "Amanda", apellido: "Quintana", descripcion: "Vecina" },
    { id: "11", nombre: "Victoria", apellido: "Torres", descripcion: "Empresaria" },
    { id: "12", nombre: "Joan", apellido: "Figueroa", descripcion: "Locutor" },
    { id: "13", nombre: "Antonio", apellido: "Solis", descripcion: "Productor" },
    { id: "14", nombre: "Vicente", apellido: "Fernandez", descripcion: "Cantante" },
    { id: "15", nombre: "Maribel", apellido: "Guardia", descripcion: "Actriz" },
    { id: "16", nombre: "Lionel", apellido: "Messi", descripcion: "Futbolista" },
    { id: "17", nombre: "Linda", apellido: "Caicedo", descripcion: "Futbolista" },
    { id: "18", nombre: "Mariana", apellido: "Pajon", descripcion: "Ciclimos" },
    { id: "19", nombre: "Kobe", apellido: "Brayant", descripcion: "Baloncestista" },
    { id: "20", nombre: "Cristiano", apellido: "Ronaldo", descripcion: "Futbolista" }
  ];
  const handleBuscar = (inputValue) => {
    setBuscarInput(inputValue);
  };

  const filteredPersonas = Personas.filter(
    (persona) =>
      persona.id.toLowerCase().includes(buscarInput.toLowerCase()) ||
      persona.nombre.toLowerCase().includes(buscarInput.toLowerCase()) ||
      persona.apellido.toLowerCase().includes(buscarInput.toLowerCase()) ||
      persona.descripcion.toLowerCase().includes(buscarInput.toLowerCase())
  );
  const { pagina } = useContext(GeneralContext);
  console.log(pagina)

  let filteredData = Personas;
  const selectPaginacion = () => {
    switch (pagina) {
      case '5':
        filteredData = filteredData.slice(0, 5)
        break;
      case '10':
        filteredData = filteredData.slice(0, 10)
        break;
      case '15':
        filteredData = filteredData.slice(0, 15)
        break;
      case '20':
        filteredData = filteredData.slice(0, 20)
        break;
    
      default:
        filteredData
        break;
    }
  }

  selectPaginacion();
  return (
    <>
      <SelectComponent />
      <BuscadorComponent handleBuscar={handleBuscar} />
      <TableComponent Personas={filteredPersonas} />
      <p>{seleccion} of 20</p>
    </>
  );
}

export default App;

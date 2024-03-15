import React, { useState, useContext } from "react";
import TableComponent from "./components/TableComponent";
import BuscadorComponent from "./components/BuscadorComponent";
import RegistrarComponent from "./components/RegistrarComponent";
import "./App.css";

function App() {
  const [buscarInput, setBuscarInput] = useState("");
  const [contador, setContador]= useState(5)
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
  ).slice(0,contador)

  const handleContador = (e)=>{
    setContador(Number(e.target.value))
  }
  const optionContador = [5,10,15,20]
  return (
    <>
        <select value={contador} name="" id="" onChange={handleContador} className="ll">
          {optionContador.map((opcion)=>(
          <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>  
      <BuscadorComponent handleBuscar={handleBuscar} />
      <TableComponent Personas={filteredPersonas} />
      <RegistrarComponent registros={filteredPersonas.length}
      personas={filteredPersonas.length}>
      </RegistrarComponent>      
    </>
  );
}

export default App;

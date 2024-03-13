import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext.jsx';

const SelectComponent = () => {
  const { seleccion, setSeleccion } = useContext(GeneralContext);


  return (
    <div className='select-container'>
      <select className='select-numero' value={seleccion} onChange={(event) => setSeleccion(event.target.value)}>
        <option value="pag">Select</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default SelectComponent;

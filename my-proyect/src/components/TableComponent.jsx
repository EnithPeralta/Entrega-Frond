import React, { useState } from "react";
const TableComponent = ({ Personas }) => {
  return (
    <div >
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Last name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Personas.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

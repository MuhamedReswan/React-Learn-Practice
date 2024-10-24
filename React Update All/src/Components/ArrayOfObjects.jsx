/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function ArrayOfObjects() {
  const [cars, setCars] = useState([]);
  const [nameN, setName] = useState("");
  const [modelN, setModel] = useState(new Date().getFullYear());
  const [companyN, setCompany] = useState("");

  function handleAddCar() {
    const newCar = {
      name: nameN,
      model: modelN,
      company: companyN,
    };

    setCars((c) => [...c, newCar]);

    setCompany("");
    setModel(new Date().getFullYear());
    setName("");
  }

  function handleModel(event) {
    setModel(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleCompany(event) {
    setCompany(event.target.value);
  }

  function handleRemoveCar(index) {
    setCars(cars.filter((c, i) => i != index));
  }

  return (
    <div>
      <h1>Array of objects cars</h1>

      <ul>
        {cars.map((val, index) => (
          <li key={index}>
            {val.name} {val.model} {val.company}
            <span>
              <button onClick={() => handleRemoveCar(index)}>Remove</button>
            </span>
          </li>
        ))}
      </ul>

      <input
        required
        type="text"
        value={nameN}
        placeholder="Enter name"
        onChange={handleName}
      />
      <input
        required
        type="number"
        value={modelN}
        placeholder="Enter model"
        onChange={handleModel}
      />
      <input
        required
        type="text"
        value={companyN}
        placeholder="Enter company"
        onChange={handleCompany}
      />
      <button onClick={handleAddCar}>Add</button>
    </div>
  );
}

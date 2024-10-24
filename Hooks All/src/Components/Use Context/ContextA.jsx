// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
import ContextB from "./ContextB";

export const UserContext = createContext();

export default function ContextA() {
  const [name, setName] = useState("Reswan");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="box">
      <h1>Context A</h1>
      <h3>{`Hello ${name}`}</h3>
      <UserContext.Provider value={name}>
        <ContextB />
      </UserContext.Provider>
      <h3>
        {" "}
        <input type="text" onChange={handleChange} value={name} />
      </h3>
    </div>
  );
}

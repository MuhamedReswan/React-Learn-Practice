// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { UserContext } from "./ContextA";

export default function ContextD() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Context D</h1>
      <h2>{`ContextD user is ${user}`}</h2>
    </div>
  );
}

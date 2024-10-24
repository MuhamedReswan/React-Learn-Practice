// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { UserContext } from "./ContextA";

import ContextD from "./ContextD";
export default function ContextC() {
  const userName = useContext(UserContext);

  return (
    <div className="box">
      <h1>Context C</h1>
      <h2>contextC user is {userName}</h2>
      <ContextD />
    </div>
  );
}

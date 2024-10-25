/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useCustom from "./useCustom";

export default function DocTitleTwo() {
  const [count, setCount] = useState(0);

  useCustom(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
    </div>
  );
}

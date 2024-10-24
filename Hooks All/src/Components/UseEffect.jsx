// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count :${count} ${color}`;
    return () => {
      // SOME CLEAN UP CODE
    };
  }, [count, color]);

  function handleDec() {
    setCount((c) => c - 1);
  }

  function handleInc() {
    setCount((c) => c + 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "Red" : "green"));
  }

  return (
    <div>
      <h2 style={{ color }}>count:{count}</h2>
      <button onClick={handleDec}>Increment</button>
      <button onClick={handleInc}>Decrement</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

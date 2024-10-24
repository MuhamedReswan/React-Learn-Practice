/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function ArrayUpdate() {
  const [foods, setFood] = useState(["apple", "banana", "mango"]);

  function handleAddFood() {
    let newFood = document.getElementById("add").value;
    document.getElementById("add").value = "";
    if (newFood != "") {
      setFood((f) => [...f, newFood]);
    }
  }

  function handleRemove(index) {
    setFood(foods.filter((_, i) => i != index));
  }

  return (
    <div>
        <h1>Array updates</h1>
      <ul>
        {foods.map((val, index) => (
          <li key={index}>
            {val}
            <span>
              <button onClick={() => handleRemove(index)}>remove</button>
            </span>
          </li>
        ))}
      </ul>
      <input type="text" id="add" />
      <button onClick={handleAddFood}>add</button>
    </div>
  );
}

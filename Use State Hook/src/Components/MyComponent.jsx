import { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Guest ");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("updatedName");
  };

  const IncrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age:{age}</p>
      <button onClick={IncrementAge}>Increment Age</button>

      <p>IsEmplyeed:{isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>
  );
}

/* eslint-disable no-unused-vars */

import React, { useRef, useEffect } from "react";

export default function UseRef() {
  let inputRef = useRef(null);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    console.log("COMPONENT RENDERD");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <h1>Use Ref </h1>
      <button onClick={handleClick}>Click Me</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}

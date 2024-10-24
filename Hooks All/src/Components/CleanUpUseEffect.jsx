/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function CleanUpUseEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listerner Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `size: ${width} X ${height}`;
  }, [width, height]);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <div>
      <h3>Clean up with use Effect</h3>
      <p>window width:{width}px</p>
      <p>window height:{height}px</p>
    </div>
  );
}

import { useState } from "react";

export default function () {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <button
        style={{
          padding: "1rem",
          fontSize: "1.5rem",
          color: "white",
          backgroundColor: darkTheme ? "darkred" : "darkblue",
        }}
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      >
        Componente interactivo
      </button>
    </>
  );
}

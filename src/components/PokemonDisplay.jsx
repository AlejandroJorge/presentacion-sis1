import { useState, useRef } from "react";

export default function PokemonDisplay() {
  const [imgSrc, setImgSrc] = useState("");
  const formText = useRef("");

  function handleSubmit() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + formText.current.value)
      .then((response) => response.json())
      .then((data) => setImgSrc(data.sprites.front_default))
      .catch(() => console.log("Ha ocurrido un error en el fetch"));
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        alignItems: "center",
      }}
    >
      <h3>Pokemon displayer</h3>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input type="text" ref={formText}></input>
        <input type="submit"></input>
      </form>
      {imgSrc ? <img style={{ width: "10rem" }} src={imgSrc}></img> : null}
    </div>
  );
}

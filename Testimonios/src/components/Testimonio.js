import React from "react";
import "./Testimonio.css";

export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimono"
        src={require(`../Imagenes/${props.imagen}.jpg`)}
        alt="Foto de Hetfield"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre">
          <strong>{props.nombre}</strong>
        </p>
        <p className="cargo">{props.cargo} de <strong>Metallica</strong></p>
        <p className="texto">{props.texto} </p>
      </div>
    </div>
  );
}

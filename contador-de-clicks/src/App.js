import "./App.css";
import logo from "./Imagenes/Logo.png";
import Button from "./components/Button";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={logo} alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Button
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Button
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

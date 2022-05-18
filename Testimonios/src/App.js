import "./App.css";
import { Testimonio } from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <h1>Metallica</h1>
      <div className="contenedor-principal">
        <Testimonio
          nombre="James Hetfield"
          cargo="Guitarrista y voz lider"
          texto="James Alan Hetfield es un músico estadounidense conocido por ser el vocalista, 
          guitarrista rítmico y principal compositor de la banda de thrash metal Metallica"
          imagen="Hetfield"
        />
        <Testimonio
          nombre="Lars Ulrich"
          cargo="Baterista"
          texto="Lars Ulrich un músico danés conocido principalmente por ser el baterista, compositor, 
          fundador y líder (junto a James Hetfield) de la banda de thrash metal estadounidense Metallica."
          imagen="Lars"
        />
        <Testimonio
          nombre="Kirk Hammet"
          cargo="Guitarrista"
          texto="Kirk Lee Hammett  es un guitarrista estadounidense, actualmente miembro de la banda de thrash metal Metallica."
          imagen="Kirk"
        />
        <Testimonio
          nombre="Robert Trujillo"
          cargo="Bajista"
          texto="Robert Trujillo es un músico estadounidense de ascendencia mexicana, bajista actual de la banda Metallica."
          imagen="Robert"
        />
      </div>
    </div>
  );
}

export default App;

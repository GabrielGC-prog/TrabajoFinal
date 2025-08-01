import chocoLogo from "./assets/logo.svg";
import "./App.css";
import { ChocoList } from "./components/ChocoList";
import ChocoData from "./data/ChocoData";
import { Filter } from "./components/filtroStock";
import { useState } from "react";
import { ChocoClick } from "./components/chocoClick";

function App() {
  const producto = ChocoData;
  const [mostrarStock, setMostrarStock] = useState(false);
  const filterStock = mostrarStock
    ? producto.filter((produ) => produ.stock)
    : producto;
  /*const addPedido = (nombre, telefono, pedido) => {
    const newPedido = {
      nombre: nombre,
      telefono: telefono,
      pedido: pedido,
    };
  };*/
  const handleClick = () => {
    alert("¡Se hizo clic en el botón!");
  };

  return (
    <>
      <div>
        <a href="https://www.instagram.com/chocoandco.sn/" target="_blank">
          <img src={chocoLogo} className="logo" alt="Choco logo" />
        </a>
      </div>
      <h1>Choco & Co.</h1>
      <div>
        <Filter mostrarStock={mostrarStock} setMostrarStock={setMostrarStock} />
        <ChocoList choco={filterStock} />
        <ChocoClick click={handleClick} />
      </div>
    </>
  );
}

export default App;

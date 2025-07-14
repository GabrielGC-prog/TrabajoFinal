import chocoLogo from "./assets/logo.svg";
import "./App.css";
import { ChocoList } from "./components/ChocoList";
import ChocoData from "./data/ChocoData";

function App() {
  return (
    <>
      <div>
        <a href="https://www.instagram.com/chocoandco.sn/" target="_blank">
          <img src={chocoLogo} className="logo" alt="Choco logo" />
        </a>
      </div>
      <h1>Choco & Co.</h1>
      <div>
        <ChocoList choco={ChocoData} />
      </div>
    </>
  );
}

export default App;

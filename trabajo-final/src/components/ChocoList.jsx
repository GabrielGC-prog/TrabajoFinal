import { ChocoCard } from "./chocoCard";
import "./chocoList.css";
export const ChocoList = ({ choco }) => {
  return (
    <div>
      <h2>Propuestas en chocolates</h2>
      <div className="cards">
        {choco.map((choco, indice) => (
          <ChocoCard
            key={indice + choco.title}
            title={choco.title}
            description={choco.description}
            image={choco.image}
          />
        ))}
      </div>
    </div>
  );
};

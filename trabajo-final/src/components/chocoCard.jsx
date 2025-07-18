import "./chocoCard.css";

export const ChocoCard = ({ title, description, image }) => {
  const imageUrl = image ? image : "https://placehold.co/400";

  return (
    <div className="cards">
      <img src={imageUrl} width="256" height="192" alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

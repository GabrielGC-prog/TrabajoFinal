import "./chocoCard.css";
export const ChocoCard = ({ title, description, image }) => {
  const imageUrl = image ? image : "https://placehold.co/400";

  return (
    <div className="card">
      <img src={imageUrl} width="256" height="192" alt={title} />
      <div>
        <h2>{title}</h2>
        <p
          style={{
            display: "flex",
            textAlign: "center",
            width: "50%",
            alignItems: "center",
            textAlignLast: "center",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

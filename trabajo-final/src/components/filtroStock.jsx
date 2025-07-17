export const Filter = ({ mostrarStock, setMostrarStock }) => {
  const handleChecked = () => {
    setMostrarStock(!mostrarStock);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={mostrarStock}
          onChange={handleChecked}
        />
        {!mostrarStock ? "Mostrar todo" : "Solo con stock"}
      </label>
    </div>
  );
};

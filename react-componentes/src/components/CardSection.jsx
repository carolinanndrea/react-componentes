// Componente reutilizable para cada tarjeta
function CardSection({ title, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default CardSection;
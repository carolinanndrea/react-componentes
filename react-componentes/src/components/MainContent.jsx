// Importar el componente CardSection
import CardSection from './CardSection';

function MainContent() {
  // Datos para las tarjetas (esto reemplaza el HTML repetitivo)
  const cardsData = [
    {
      id: 1,
      title: "Title",
      content: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto expedita voluptatibus quisquam minima doloribus, nihil perspiciatis atque in deleniti.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolores.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quos."
      ]
    },
    {
      id: 2,
      title: "Title",
      content: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto expedita voluptatibus quisquam minima doloribus, nihil perspiciatis atque in deleniti.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolores.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quos."
      ]
    },
    {
      id: 3,
      title: "Title",
      content: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto expedita voluptatibus quisquam minima doloribus, nihil perspiciatis atque in deleniti.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolores.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quos."
      ]
    }
  ];

  return (
    <main className="grid-container">
      {/* Usar el componente CardSection para cada tarjeta */}
      {cardsData.map(card => (
        <CardSection 
          key={card.id}
          title={card.title}
          content={card.content}
        />
      ))}
    </main>
  );
}

export default MainContent;
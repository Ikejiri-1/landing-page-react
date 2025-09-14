import "./Cards.css";

interface CardData {
  id: number;
  image?: string;
  title: string;
  text: string;
  className?: string;
  strongText?: string;
  assign?: string;
  children?: React.ReactNode;
}

interface CardsProps {
  cards: CardData[];
}

export function Cards({ cards }: CardsProps) {
  return (
    <div className="cards-container">
      <ul>
        {cards.map((card) => (
          <li key={card.id} className={`card card-${card.id}`}>
            {card.image && (
              <img src={card.image} className="img-card" alt={card.title} />
            )}

            <div>
              <h2 className="card-title">{card.title}</h2>
              <p className={`card-text ${card.className || ""}`}>{card.text}</p>
              {card.strongText && (
                <p
                  className={`strong-text ${
                    card.strongText ? "with-strong" : ""
                  }`}
                >
                  <strong>{card.strongText}</strong>
                </p>
              )}
              {card.assign && <p className="assign">{card.assign}</p>}
            </div>
            {card.children}
          </li>
        ))}
      </ul>
    </div>
  );
}

import cardImg from "/src/assets/img/ozonioterapia.png";
import "./Cards.css";

const cardsContent = [
  {
    id: 1,
    image: cardImg,
    title: "Uma aliada poderosa no cuidado da sua saúde",
    text: "Você já ouviu falar da ozonioterapia, mas ainda tem dúvidas sobre como ela funciona e de que forma pode contribuir para o tratamento de doenças crônicas? A ozonioterapia é uma técnica terapêutica que utiliza uma mistura de oxigênio e ozônio medicinal, aplicada de forma controlada, com o objetivo de estimular o equilíbrio e a regeneração do organismo. Com propriedades anti-inflamatórias, antioxidantes, antimicrobianas e imunomoduladoras, o ozônio tem sido utilizado há décadas em países da Europa e América Latina com resultados comprovados por diversos estudos científicos.",
  },
  {
    id: 2,
    title: "Tratamento de doenças:",
    text: "A ozonioterapia tem se mostrado eficaz no tratamento de doenças como artrite, artrose, hérnia de disco, fibromialgia, asma, doenças cardiovasculares, diabetes e até mesmo como coadjuvante em tratamentos oncológicos. Também é uma aliada em processos de emagrecimento, cicatrização, rejuvenescimento estético e, mais recentemente, em protocolos de reabilitação de dependência química, auxiliando na redução dos sintomas de abstinência.",
  },
  {
    id: 3,
    title: "Tratamento Seguro e Personalizado:",
    text: "Apesar de seus inúmeros benefícios, é importante lembrar que cada organismo é único. Por isso, o tratamento com ozonioterapia deve ser individualizado, respeitando as necessidades e condições específicas de cada paciente. Se você busca uma alternativa segura, natural e cientificamente respaldada para melhorar sua saúde, a ozonioterapia pode ser o caminho ideal para o seu bem-estar físico, emocional e social.",
  },
];

export function Cards() {
  return (
    <div className="cards-container">
      <ul>
        {cardsContent.map((card) => (
          <li key={card.id} className={`card card-${card.id}`}>
            <img src={card.image} className="img-card" alt="" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-text">{card.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

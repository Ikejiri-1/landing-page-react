import bemVindoImg from "/src/assets/img/perfil_2.png";
import "./Main.css";
import { ProceduresTags } from "./ProceduresTags";
import { Cards } from "../../components/Cards";
import { Form } from "../../components/Form";
import cardImg from "/src/assets/img/ozonioterapia.png";

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
  {
    id: 4,
    title: "Benefícios Comprovados:",
    text: "Fortalecimento do sistema imunológico\n Alívio de dores crônicas\n Melhora da circulação sanguínea e oxigenação dos tecidos\n Auxílio no controle da glicemia em pacientes diabéticos\n Ação anti-inflamatória e analgésica natural\n Redução do estresse oxidativo e combate aos radicais livres",
    className: "multiline-text",
  },
  {
    id: 5,
    title:
      "Agende uma consulta e descubra como a ozonioterapia pode transformar sua vida!",
    text: "",
    children: <Form />,
  },
];

export function Home() {
  return (
    <>
      <main>
        <div className="main-container">
          <figure>
            <img src={bemVindoImg} alt="imagem da doutora" />
          </figure>
          <div className="main-text-container">
            <div className="welcome-text">
              <h2>Seja bem-vindo(a)!</h2>
              <p>
                Cuidando da sua saúde com carinho e inovação. Conheça os
                benefícios da Estética Avançada e da Ozonioterapia. Trabalhamos
                com os seguintes procedimentos:
              </p>
            </div>
            <div className="procedures-tags-container">
              <ProceduresTags />
            </div>
          </div>
        </div>

        <div className="cards-container">
          <Cards cards={cardsContent}></Cards>
        </div>
      </main>
    </>
  );
}

import { useParams } from "react-router-dom";
import { Cards } from "../../components/Cards";
import botoxImg from "/src/assets/img/botox.png";
import bioImg from "/src/assets/img/bioestimulador.png";
import preenchimentoImg from "/src/assets/img/preenchimento.png";
import bursiteImg from "/src/assets/img/bursite.png";
import tendiniteImg from "/src/assets/img/tendinite.png";
import ciliosImg from "/src/assets/img/cilios.png";
import crosspeelImg from "/src/assets/img/crosspeel.png";
import designSobrancelhaImg from "/src/assets/img/design.jpg";
import microagulhamentoImg from "/src/assets/img/microagulhamento.png";
import coloracaoImg from "/src/assets/img/coloracao.png";
import PDOImg from "/src/assets/img/PDO.png";
import pLabialImg from "/src/assets/img/p-labial.png";
import botoxPotesImg from "/src/assets/img/potes.jpg";
export function Procedures() {
  const { slug } = useParams();
  const proceduresData = {
    "toxina-botulinica-botox": [
      {
        id: 8,
        title: "Toxina Botulínica (Botox)",
        text: "Conheça alguns dos benefícios que a Toxina Botulínica pode oferecer para você!",
        image: botoxImg,
      },
      {
        id: 9,
        title: "Benefícios do Botox:",
        text: "Suaviza rugas e linhas de expressão\nMelhora o aspecto do olhar e do sorriso",
        image: botoxPotesImg,
        className: "multiline-text",
      },
    ],
    "preenchimento-facial-e-labial": [
      {
        id: 10,
        title: "Preenchimento (Facial e Labial)",
        text: "Conheça alguns dos benefícios que o Preenchimento Facial e Labial pode oferecer para você!",
      },
      {
        id: 11,
        title: "Benefícios do Preenchimento:",
        text: "Restaura volume e contornos faciais\n Suaviza rugas e linhas de expressão\n Corrige olheiras profundas\n Harmoniza lábios",
        className: "multiline-text",
        image: preenchimentoImg,
      },
      {
        id: 998,
        title: "Benefícios do Preenchimento Labial",
        text: "é um procedimento estético minimamente invasivo que usa o ácido hialurónico, uma substância naturalmente presente no corpo, para aumentar o volume dos lábios, definir seu contorno e corrigir assimetrias, proporcionando hidratação e um aspecto mais jovem.",
        image: pLabialImg,
      },
    ],
    "fios-de-pdo": [
      {
        id: 12,
        title: "Fios de PDO",
        text: "Conheça alguns dos benefícios que os Fios de PDO podem oferecer para você!",
        image: PDOImg,
      },
      {
        id: 13,
        title: "Benefícios",
        text: "Ajudam na sustentação da pele\n Estimulam a produção de colágeno\n Rejuvenescimento facial\n Auxílio na redução de estrias e manchas na pele",
        className: "multiline-text",
      },
    ],
    "bioestimulador-de-colageno": [
      {
        id: 14,
        title: "Bioestimulador de Colágeno",
        text: "Descrição detalhada sobre Bioestimulador de Colágeno...",
        image: bioImg,
      },
      {
        id: 15,
        title: "Bioestimulador de Colágeno",
        text: "Estimula a produção natural de colágeno\n Melhora a firmeza e elasticidade da pele\n Reduz flacidez facial",
        className: "multiline-text",
      },
    ],

    microagulhamento: [
      {
        id: 16,
        title: "Microagulhamento",
        text: "Descrição detalhada sobre Microagulhamento...",
        image: microagulhamentoImg,
      },
      {
        id: 17,
        title: "Microagulhamento",
        text: "Descrição detalhada sobre Microagulhamento...",
      },
    ],
    "limpeza-de-pele-cross-peel": [
      {
        id: 18,
        title: "Limpeza de Pele (Cross Peel)",
        text: "Conheça alguns dos benefícios que a Limpeza de Pele pode oferecer para você!",
        image: crosspeelImg,
      },
      {
        id: 19,
        title: "Benefícios da Limpeza de Pele:",
        text: "Remove impurezas e células mortas\n Reduz cravos e previne acne\n Controla a oleosidade\n Melhora a textura e luminosidade",
        className: "multiline-text",
      },
    ],
    "design-de-sobrancelha": [
      {
        id: 20,
        title: "Design de Sobrancelha",
        text: "Realce o seu olhar com sobrancelhas bem definidas e harmonizadas de acordo com o formato do seu rosto.",
        image: designSobrancelhaImg,
      },

      {
        id: 21,
        title: "Coloração",
        text: "Perfeita para realçar o olhar, a coloração uniformiza os fios, destaca o formato natural e garante sobrancelhas mais cheias e marcantes",
        image: coloracaoImg,
      },
    ],
    "extensao-de-cilios": [
      {
        id: 22,
        title: "Extensão de Cílios",
        text: "Veja como a extensão de cílios pode transformar o seu olhar e melhora a sua autoestima!",
        image: ciliosImg,
      },
      {
        id: 23,
        title: "Extensão de Cílios",
        text: "Realça o olhar com naturalidade e elegância\n Técnicas personalizadas(clássica, híbrida, volume russo)\n Fios leves e confortáveis que não agridem os cílios naturais",
        className: "multiline-text",
      },
    ],
    "alivio-da-dor-ozonioterapia": [
      {
        id: 24,
        title: "Bursite (Ozonioterapia)",
        text: "Você sabia? A Ozonioterapia é uma aliada no tratamento da bursite, ajudando a reduzir dor e inflamação!",
        image: bursiteImg,
      },
      {
        id: 25,
        title: "Tendinite (Ozonioterapia)",
        text: "Sente dor no ombro ao levantar o braço? Pode ser tendinite! A Ozonioterapia é um tratamento natural que ajuda a aliviar a dor e recuperar os movimentos. Agende sua avaliação!",
        image: tendiniteImg,
      },
    ],
  };
  const procedure = proceduresData[slug as keyof typeof proceduresData];

  if (!procedure) {
    return <h1>Procedimento não encontrado!</h1>;
  }
  const cards = Array.isArray(procedure) ? procedure : [procedure];
  return (
    <>
      <Cards cards={cards}></Cards>
    </>
  );
}

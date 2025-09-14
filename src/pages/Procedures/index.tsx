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

export function Procedures() {
  const { slug } = useParams();
  const proceduresData = {
    "toxina-botulinica-botox": {
      id: 8,
      title: "Toxina Botulínica (Botox)",
      text: "Descrição detalhada sobre Toxina Botulínica...",
      image: botoxImg,
    },
    "preenchimento-facial-e-labial": {
      id: 9,
      title: "Preenchimento (Facial e Labial)",
      text: "Descrição detalhada sobre preenchimento...",
      image: preenchimentoImg,
    },
    "fios-de-pdo": {
      id: 10,
      title: "Fios de PDO",
      text: "Descrição detalhada sobre Fios de PDO...",
    },
    "bioestimulador-de-colageno": {
      id: 11,
      title: "Bioestimulador de Colágeno",
      text: "Descrição detalhada sobre Bioestimulador de Colágeno...",
      image: bioImg,
    },

    microagulhamento: {
      id: 12,
      title: "Microagulhamento",
      text: "Descrição detalhada sobre Microagulhamento...",
    },
    "limpeza-de-pele-cross-peel": {
      id: 13,
      title: "Limpeza de Pele (Cross Peel)",
      text: "Descrição detalhada sobre Limpeza de Pele...",
      image: crosspeelImg,
    },
    "design-de-sobrancelha": {
      id: 14,
      title: "Design de Sobrancelha",
      text: "Descrição detalhada sobre Design de Sobrancelha...",
      image: designSobrancelhaImg,
    },
    "extensao-de-cilios": {
      id: 15,
      title: "Extensão de Cílios",
      text: "Descrição detalhada sobre Extensão de Cílios...",
      image: ciliosImg,
    },
    "alivio-da-dor-ozonioterapia": [
      {
        id: 16,
        title: "Alívio da Dor (Ozonioterapia)",
        text: "Descrição detalhada sobre Alívio da Dor...",
        image: bursiteImg,
      },
      {
        id: 17,
        title: "Tendinite (Ozonioterapia)",
        text: "Descrição detalhada sobre Tendinite...",
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

import { useParams } from "react-router-dom";

export function Procedures() {
  const { slug } = useParams();
  const proceduresData = {
    "toxina-botulinica-botox": {
      title: "Toxina Botulínica (Botox)",
      description: "Descrição detalhada sobre Toxina Botulínica...",
    },
    "preenchimento-facial-e-labial": {
      title: "Preenchimento (Facial e Labial)",
      description: "Descrição detalhada sobre preenchimento...",
    },
    "fios-de-pdo": {
      title: "Fios de PDO",
      description: "Descrição detalhada sobre Fios de PDO...",
    },
    "bioestimulador-de-colageno": {
      title: "Bioestimulador de Colágeno",
      description: "Descrição detalhada sobre Bioestimulador de Colágeno...",
    },
    microagulhamento: {
      title: "Microagulhamento",
      description: "Descrição detalhada sobre Microagulhamento...",
    },
    "limpeza-de-pele-cross-peel": {
      title: "Limpeza de Pele (Cross Peel)",
      description: "Descrição detalhada sobre Limpeza de Pele...",
    },
    "design-de-sobrancelha": {
      title: "Design de Sobrancelha",
      description: "Descrição detalhada sobre Design de Sobrancelha...",
    },
    "extensao-de-cilios": {
      title: "Extensão de Cílios",
      description: "Descrição detalhada sobre Extensão de Cílios...",
    },
    "ozonioterapia-alivio-da-dor": {
      title: "Alívio da Dor (Ozonioterapia)",
      description: "Descrição detalhada sobre Alívio da Dor...",
    },
  };
  const procedure = proceduresData[slug as keyof typeof proceduresData];

  if (!procedure) {
    return <h1>Procedimento não encontrado!</h1>;
  }
  return (
    <>
      <div>
        <h1>{procedure.title}</h1>
        <p>{procedure.description}</p>
      </div>
    </>
  );
}

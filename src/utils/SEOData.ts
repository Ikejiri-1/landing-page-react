interface SEOData {
  title: string;
  description: string;
}

export const seoMap: Record<string, SEOData> = {
  "/": {
    title: "Renova Estética - Home",
    description:
      "Bem-vindo à Renova Estética! Descubra nossos tratamentos inovadores para cuidar da sua saúde e beleza.",
  },
  "/sobre-mim": {
    title: "Sobre Mim - Renova Estética",
    description:
      "Conheça Natália de Jesus, enfermeira especialista em Obstetrícia, Estética Avançada e Ozonioterapia, dedicada ao cuidado integral do paciente.",
  },
};

export function getProcedureSEO(slug: string): SEOData {
  const procedures: Record<string, SEOData> = {
    "toxina-botulinica-botox": {
      title: "Toxina Botulínica (Botox) - Renova Estética",
      description:
        "Saiba como a Toxina Botulínica (Botox) pode suavizar rugas e linhas de expressão e realçar sua beleza natural.",
    },
    "preenchimento-facial-e-labial": {
      title: "Preenchimento Facial e Labial - Renova Estética",
      description:
        "Descubra os benefícios do preenchimento facial e labial, restaurando volume, contornos e harmonizando seu sorriso.",
    },
    "fios-de-pdo": {
      title: "Fios de PDO - Renova Estética",
      description:
        "Conheça os fios de PDO, que auxiliam na sustentação da pele, estimulam a produção de colágeno e promovem rejuvenescimento facial.",
    },
    "bioestimulador-de-colageno": {
      title: "Bioestimulador de Colágeno - Renova Estética",
      description:
        "Saiba como o bioestimulador de colágeno melhora firmeza e elasticidade da pele, reduz flacidez e estimula produção natural de colágeno.",
    },
    microagulhamento: {
      title: "Microagulhamento - Renova Estética",
      description:
        "O microagulhamento promove rejuvenescimento, melhora textura da pele e estimula a produção de colágeno de forma natural.",
    },
    "limpeza-de-pele-cross-peel": {
      title: "Limpeza de Pele (Cross Peel) - Renova Estética",
      description:
        "Remova impurezas, previna acne e melhore a textura da sua pele com a limpeza Cross Peel.",
    },
    "design-de-sobrancelha": {
      title: "Design de Sobrancelha - Renova Estética",
      description:
        "Realce seu olhar com sobrancelhas bem definidas e harmonizadas de acordo com o formato do seu rosto.",
    },
    "extensao-de-cilios": {
      title: "Extensão de Cílios - Renova Estética",
      description:
        "Transforme seu olhar com extensões de cílios personalizadas, leves e confortáveis, sem agredir os naturais.",
    },
    "alivio-da-dor-ozonioterapia": {
      title: "Ozonioterapia para Dor - Renova Estética",
      description:
        "Alivie bursite, tendinite e outras dores com a ozonioterapia, promovendo bem-estar e recuperação natural.",
    },
  };

  return (
    procedures[slug] || {
      title: "Procedimento - Renova Estética",
      description: "",
    }
  );
}

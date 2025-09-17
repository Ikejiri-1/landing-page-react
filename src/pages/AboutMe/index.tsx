import { Cards } from "../../components/Cards";
import aboutMeImg from "/src/assets/img/perfil_2.png";
import imgDoutora from "/src/assets/img/perfil_1.png";
import { SEO } from "../../components/SEO";

const cards = [
  {
    id: 6,
    title: "Sobre Mim",
    text: "Eu Natália de Jesus, sou enfermeira, com especialização em Obstetrícia e Ginecologia pela renomada Faculdade Albert Einstein, além de formações em Estética Avançada e Ozonioterapia. Minha missão é promover um cuidado que vá além do tratamento clínico, um cuidado que acolhe, previne, trata e transforma. Acredito que a verdadeira saúde está no equilíbrio entre corpo, mente e emoções. Por isso, meu trabalho é pautado no compromisso com a vida, com o bem-estar e com o olhar humano para cada paciente. Atuo com responsabilidade, ética e escuta ativa, entendendo que cada pessoa carrega uma história única que merece ser respeitada e valorizada. Mais do que cuidar de sintomas, escolhi me dedicar a um atendimento que promove saúde com consciência, leveza e empatia. E é justamente essa essência que busco refletir em cada atendimento que realizo.",
    image: aboutMeImg,
    className: "about-me",
  },
  {
    id: 7,
    title: "Ozonioterapia",
    text: " Atuo com compromisso e responsabilidade, pois acredito que o cuidado vai além de tratar sintomas — é sobre prevenir, promover a saúde e enxergar o paciente de forma integral, considerando seu bem-estar físico, emocional e social.",
    strongText:
      "“Ozonioterapia: um encontro entre a ciência e a natureza para restaurar o equilíbrio e a vitalidade do organismo”",
    image: imgDoutora,
    className: "about-me",
    assign: "Dra. Natália de Jesus",
  },
];

export function AboutMe() {
  const firstImage = cards[0].image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dra. Natália de Jesus",
    description:
      "Enfermeira com especialização em Obstetrícia e Ginecologia e experiência em Estética Avançada e Ozonioterapia.",
    image: firstImage,
    url: "https://renovaestetica.com/sobre-mim",
  };

  return (
    <>
      <SEO
        title="Sobre Mim - Renova Estética"
        description="Conheça a Dra. Natália de Jesus, especialista em Estética Avançada e Ozonioterapia."
        canonicalUrl="https://renovaestetica.com/sobre-mim"
        ogTitle="Sobre Mim - Renova Estética"
        ogDescription="Conheça a Dra. Natália de Jesus, especialista em Estética Avançada e Ozonioterapia."
        ogImage={firstImage}
        twitterCard="summary_large_image"
        jsonLd={jsonLd}
      />

      <div>
        <Cards cards={cards} />
      </div>
    </>
  );
}

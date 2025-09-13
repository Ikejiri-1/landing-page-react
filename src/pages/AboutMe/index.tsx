import { Cards } from "../../components/Cards";
import aboutMeImg from "/src/assets/img/perfil_2.png";
import imgDoutora from "/src/assets/img/perfil_1.png";
const cards = [
  {
    id: 5,
    title: "Sobre Mim",
    text: "Me chamo Natália de Jesus, sou enfermeira, com especialização em Obstetrícia e Ginecologia pela renomada Faculdade Albert Einstein, além de formações em Estética Avançada e Ozonioterapia. Minha missão é promover um cuidado que vá além do tratamento clínico, um cuidado que acolhe, previne, trata e transforma. Acredito que a verdadeira saúde está no equilíbrio entre corpo, mente e emoções. Por isso, meu trabalho é pautado no compromisso com a vida, com o bem-estar e com o olhar humano para cada paciente. Atuo com responsabilidade, ética e escuta ativa, entendendo que cada pessoa carrega uma história única que merece ser respeitada e valorizada. Mais do que cuidar de sintomas, escolhi me dedicar a um atendimento que promove saúde com consciência, leveza e empatia. E é justamente essa essência que busco refletir em cada atendimento que realizo.",
    image: aboutMeImg,
    className: "about-me",
  },
  {
    id: 6,
    title: "Ozonioterapia",
    text: "Sou enfermeira, especialista em Obstetrícia e Ginecologia pela Faculdade Albert Einstein, além de Estética Avançada e Ozonioterapia. Atuo com compromisso e responsabilidade, pois acredito que o cuidado vai além de tratar sintomas — é sobre prevenir, promover a saúde e enxergar o paciente de forma integral, considerando seu bem-estar físico, emocional e social.",
    strongText:
      "“Ozonioterapia: um encontro entre a ciência e a natureza para restaurar o equilíbrio e a vitalidade do organismo”",
    image: imgDoutora,
    className: "about-me",
    assign: "Dr. Natália de Jesus",
  },
];

export function AboutMe() {
  return (
    <>
      <div>
        <Cards cards={cards}></Cards>
      </div>
    </>
  );
}

import "../Card.css";
import AboutImg from "../../../assets/img/perfil_1.png"; // substitua pelo caminho da sua imagem

export function AboutCard() {
  return (
    <div className="card-about-ozone card-about-me">
      <div className="card-paragraph">
        <h2>Sobre mim</h2>
        <p>
          Me chamo Natália de Jesus, sou enfermeira, com especialização em
          Obstetrícia e Ginecologia pela renomada Faculdade Albert Einstein,
          além de formações em Estética Avançada e Ozonioterapia. Minha missão é
          promover um cuidado que vá além do tratamento clínico, um cuidado que
          acolhe, previne, trata e transforma. Acredito que a verdadeira saúde
          está no equilíbrio entre corpo, mente e emoções. Por isso, meu
          trabalho é pautado no compromisso com a vida, com o bem-estar e com o
          olhar humano para cada paciente. Atuo com responsabilidade, ética e
          escuta ativa, entendendo que cada pessoa carrega uma história única
          que merece ser respeitada e valorizada. Mais do que cuidar de
          sintomas, escolhi me dedicar a um atendimento que promove saúde com
          consciência, leveza e empatia. E é justamente essa essência que busco
          refletir em cada atendimento que realizo.
        </p>
      </div>
      <figure className="card-figure">
        <img src={AboutImg} alt="Natália de Jesus" />
      </figure>
    </div>
  );
}

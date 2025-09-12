import "../Card.css";
import OzoneImg from "/src/assets/img/ozonioterapia.png"; // substitua pelo caminho da sua imagem
import ImgDoutora from "/src/assets/img/perfil_2.png";
export function OzoneCard() {
  return (
    <div className="card-about-ozone card-ozone">
      <figure className="card-figure">
        <img src={ImgDoutora} alt="Ozonoterapia" />
      </figure>
      <div className="card-paragraph">
        <img src={OzoneImg} alt="" />
        <p>
          Sou enfermeira, especialista em Obstetrícia e Ginecologia pela
          Faculdade Albert Einstein, além de Estética Avançada e Ozonioterapia.
          Atuo com compromisso e responsabilidade, pois acredito que o cuidado
          vai além de tratar sintomas — é sobre prevenir, promover a saúde e
          enxergar o paciente de forma integral, considerando seu bem-estar
          físico, emocional e social.
        </p>
        <blockquote>
          “Ozoniterapia: um encontro entre a ciência e a natureza para restaurar
          o equilíbrio e a vitalidade do organismo”
        </blockquote>
        <strong>Dra. Natália de Jesus</strong>
      </div>
    </div>
  );
}

import bemVindoImg from "/src/assets/img/perfil_2.png";
import "./Main.css";
import { ProceduresTags } from "./ProceduresTags";
import { Cards } from "../../components/Cards";
import { Form } from "../../components/Form";

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
          <Cards></Cards>
        </div>
        <div className="form-container">
          <Form></Form>
        </div>
      </main>
    </>
  );
}

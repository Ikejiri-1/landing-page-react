import { Cards } from "../../../components/Cards";
import { ProceduresTags } from "../ProceduresTags";

const card = [
  {
    id: 999,
    title: "Seja bem-vindo(a)",
    text: "Cuidando da sua saúde com carinho e inovação. Conheça os benefícios da Estética Avançada e da Ozonioterapia. Trabalhamos com os seguintes procedimentos:",
    children: <ProceduresTags />, // aqui vão as tags como conteúdo extra do card
  },
];

export function ProceduresCard() {
  return <Cards cards={card} />;
}

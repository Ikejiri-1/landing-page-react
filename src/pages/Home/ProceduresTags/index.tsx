import "./ProceduresTags.css";

const procedimentos = [
  "Toxina Botulínica (Botox)",
  "Preenchimento Facial e Labial ",
  "Fios de PDO",
  "Bioestimulador de Colágeno",
  "Microagulhamento ",
  "Limpeza de Pele (Cross Peel)",
  "Design de Sobrancelha",
  "Extensão de Cílios ",
  "Alívio da Dor (Ozonioterapia - Associado a Laserterapia)",
];
export function ProceduresTags() {
  return (
    <>
      <ul className="procedures-tags-list">
        {procedimentos.map((procedimento) => (
          <li key={procedimento} className="procedures-tags-list-item">
            {procedimento}
          </li>
        ))}
      </ul>
    </>
  );
}

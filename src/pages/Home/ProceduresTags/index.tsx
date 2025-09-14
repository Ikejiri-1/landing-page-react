import { Link } from "react-router-dom";
import "./ProceduresTags.css";

const procedimentos = [
  { name: "Toxina Botulínica (Botox)", slug: "toxina-botulinica-botox" },
  {
    name: "Preenchimento Facial e Labial",
    slug: "preenchimento-facial-e-labial",
  },
  { name: "Fios de PDO", slug: "fios-de-pdo" },
  { name: "Bioestimulador de Colágeno", slug: "bioestimulador-de-colageno" },
  { name: "Microagulhamento", slug: "microagulhamento" },
  { name: "Limpeza de pele (Cross Peel)", slug: "limpeza-de-pele-cross-peel" },
  { name: "Design de Sobrancelha", slug: "design-de-sobrancelha" },
  { name: "Extensão de Cílios", slug: "extensao-de-cilios" },
  { name: "Alívio da Dor Ozonioterapia", slug: "alivio-da-dor-ozonioterapia" },
];
export function ProceduresTags() {
  return (
    <>
      <ul className="procedures-tags-list">
        {procedimentos.map((procedimento) => (
          <Link
            to={`/procedimentos/${procedimento.slug}`}
            key={procedimento.name}
            className="no-link-style"
          >
            <li key={procedimento.name} className="procedures-tags-list-item">
              {procedimento.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

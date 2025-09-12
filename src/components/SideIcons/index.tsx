import Wpp from "/src/assets/img/iconewpp.png";
import Inst from "/src/assets/img/iconeinst.png";
import "./SideIcons.css";
import { Link } from "react-router-dom";
import { generateWhatsappMessage } from "../../utils/msg";

export function SideIcons() {
  const tel = "5535998101112";
  const message = "Olá! Gostaria de saber mais sobre a Ozonioterapia.";
  return (
    <div className="side-icons">
      <Link to={generateWhatsappMessage(tel, message)}>
        <img src={Wpp} alt="icone do whatsapp" />
      </Link>
      <Link to="https://www.instagram.com/nataliadejesuss_/">
        <img src={Inst} alt="icone do instagram" />
      </Link>
    </div>
  );
}

import Wpp from "/src/assets/img/iconewpp.png";
import Inst from "/src/assets/img/iconeinst.png";
import Clock from "/src/assets/img/relogio.png";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="social-media">
          <h1>Contatos:</h1>
          <ul className="social-media-list">
            <li>
              <img className="footer-icons" src={Wpp} alt="ícone do whatsapp" />
              <p>(35) 99810-1112</p>
            </li>
            <li>
              <img
                className="footer-icons insta"
                src={Inst}
                alt="ícone do instagram"
              />
              <p>@nataliadejesuss_</p>
            </li>
          </ul>
        </div>
        <div className="time">
          <h1>Horários de funcionamento:</h1>
          <ul className="time-list">
            <li>
              <img className="footer-icons-clock clock-1" src={Clock} />
              <p>
                Segunda-feira - Sexta-feira
                <br /> 09:00 - 18:00
              </p>
            </li>
            <li>
              <img className="footer-icons-clock" src={Clock} />
              <p>Sábado 09:00 - 12:00</p>
            </li>
            <li>
              <img className="footer-icons-clock" src={Clock} />
              <p>Domingo (Fechado)</p>
            </li>
          </ul>
        </div>
        <div className="address-container">
          <h1>Endereço:</h1>
          <ul>
            <li>
              <p className="address">
                Rua Adolfo Olinto, 310 - Sala 10 - Centro - Pouso Alegre
              </p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

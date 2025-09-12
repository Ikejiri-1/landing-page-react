import Logo from "/src/assets/img/logo.png";
import { Button } from "./Button";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const buttons = [
  { label: "Sobre mim", path: "/sobre-mim", type: "link" },
  { label: "Procedimentos", path: null, type: "menu" },
  { label: "Contatos", path: null, type: "scroll" },
];
const procedures = [
  "Toxina Botulínica (Botox)",
  "Preenchimento (Facial e Labial) ",
  "Fios de PDO",
  "Bioestimulador de Colágeno",
  "Microagulhamento ",
  "Limpeza de Pele (Cross Peel)",
  "Design de Sobrancelha",
  "Extensão de Cílios ",
  "Alívio da Dor (Ozonioterapia)",
];

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};
export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  function handleScrollToContacts() {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Add this effect to close the menu on path changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header>
      <div className="header-container">
        <div>
          <Link to={"/"}>
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="button-list-container">
            {buttons
              .filter((button) => button.path !== location.pathname)
              .map((button) => (
                <li key={button.label}>
                  {button.type === "link" && (
                    <Link to={button.path!}>
                      <Button>{button.label}</Button>
                    </Link>
                  )}

                  {button.type === "menu" && (
                    <>
                      <Button onClick={() => setMenuOpen(!menuOpen)}>
                        {button.label}
                      </Button>
                      {menuOpen && (
                        <ul className="dropdown-menu" ref={dropdownRef}>
                          {procedures.map((procedure) => (
                            <li key={procedure}>
                              <Link to={`/procedimentos/${slugify(procedure)}`}>
                                {procedure}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}

                  {button.type === "scroll" && (
                    <Button onClick={handleScrollToContacts}>
                      {button.label}
                    </Button>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

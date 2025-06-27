import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanContext";
import { barraNavegacionES, tituloES } from "../dictionary/ES";
import { barraNavegacionCAT, tituloCAT } from "../dictionary/CA";
import { Button } from "react-bootstrap";



 const rutas = [
  "collserola",
  "pantano-vallvidrera",
  "parque-montseny",
  "delta-llobregat",
  "montana-montserrat",
  "pedraforca",
  "delta-llobregat-2",
  "parque-natural-garraf",
  "san-lorenzo-mola",
];

export const NavegationBar = () => {
  const { lang, setLang } = useLanguage();

  const textos = lang === "es" ? barraNavegacionES : barraNavegacionCAT;
  const titulo = lang === "es" ? tituloES : tituloCAT;

  const renderPages = () =>
    textos.map((texto, index) => (
      <Nav.Link
        as={Link}
        to={`/${rutas[index]}`}
        key={`pagina-${index + 1}`}>
        <p className="fs-5">{texto}</p>
      </Nav.Link>
    ));

  return (
    <Navbar expand="xxl" className="bg-body-tertiary" fixed='top'>
      <Container fluid className="text-center">
        <Navbar.Brand as={Link} to={"/"}>
          <p className="fs-4">{titulo}</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between">
          <Nav className="mx-auto">{renderPages()}</Nav>
          <div className="d-flex gap-2">
            <Button
              variant={lang === "es" ? "primary" : "outline-primary"}
              size="sm"
              onClick={() => setLang("es")}>
              ES
            </Button>
            <Button
              variant={lang === "cat" ? "primary" : "outline-primary"}
              size="sm"
              onClick={() => setLang("cat")}>
              CAT
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

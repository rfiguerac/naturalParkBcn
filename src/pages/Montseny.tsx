import { useLanguage } from "../context/LanContext";
import { parqueMontsenyCAT } from "../dictionary/CA";
import { parqueMontsenyES } from "../dictionary/ES";
import { Articulo } from "../components/Articulo";

export const Montseny = () => {
  const { lang } = useLanguage();
  const { titulo, descripcion, image } = lang === "es" ? parqueMontsenyES : parqueMontsenyCAT;
  return <Articulo title={titulo} description={descripcion} image={image} />;
};

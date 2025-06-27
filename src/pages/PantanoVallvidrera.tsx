
import { useLanguage } from "../context/LanContext";
import { pantanoVallvidreraES } from "../dictionary/ES";
import { pantanoVallvidreraCAT } from "../dictionary/CA";
import { Articulo } from "../components/Articulo";

export const PantanoVallvidrera = () => {
  const { lang } = useLanguage();

  const { titulo, descripcion, image } =
    lang === "es" ? pantanoVallvidreraES : pantanoVallvidreraCAT;

  return <Articulo title={titulo} description={descripcion} image={image} />;
};

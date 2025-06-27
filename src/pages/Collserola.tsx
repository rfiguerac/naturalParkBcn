
import { useLanguage } from "../context/LanContext";
import { collserolaES } from "../dictionary/ES";
import { collserolaCAT } from "../dictionary/CA";
import { Articulo } from "../components/Articulo";

export const Collserola = () => {
  const { lang } = useLanguage();

  const {titulo, descripcion, image} = lang === "es" ? collserolaES : collserolaCAT;
  return <Articulo title={titulo} description={descripcion} image={image}/>
};

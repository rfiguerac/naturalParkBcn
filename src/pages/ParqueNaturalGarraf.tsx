import { Articulo } from "../components/Articulo";
import { useLanguage } from "../context/LanContext";
import { parcNaturalGarrafCAT } from "../dictionary/CA";
import { parcNaturalGarrafES } from "../dictionary/ES";


export const ParqueNaturalGarraf = () => {


  const {lang} = useLanguage();
  const {titulo,descripcion,image} = lang === 'es' ? parcNaturalGarrafES : parcNaturalGarrafCAT;
  return <Articulo image={image} title={titulo} description={descripcion} />
};

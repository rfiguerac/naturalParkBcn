

import { Articulo } from '../components/Articulo'
import { useLanguage } from '../context/LanContext';
import { deltaLlobregatCAT } from '../dictionary/CA';
import { deltaLlobregatES } from '../dictionary/ES';

export const DeltaLlobregat = () => {

  const { lang } = useLanguage();
    const { titulo, descripcion, image } = lang === "es" ? deltaLlobregatES : deltaLlobregatCAT;
 
  return <Articulo image={image} title={titulo} description={descripcion} />
}

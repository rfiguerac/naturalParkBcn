

import { Articulo } from '../components/Articulo'
import { useLanguage } from '../context/LanContext'
import { montanaMontserratCAT } from '../dictionary/CA';
import { montanaMontserratES } from '../dictionary/ES';

export const MontanaMontserrat = () => {

  const {lang} = useLanguage();
    const { titulo, descripcion, image } = lang === "es" ? montanaMontserratES : montanaMontserratCAT;

  return <Articulo image={image} title={titulo} description={descripcion} />
}

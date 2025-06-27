

import { Articulo } from '../components/Articulo'
import { useLanguage } from '../context/LanContext'
import { deltaLlobregat2CAT } from '../dictionary/CA';
import { deltaLlobregat2ES } from '../dictionary/ES';

export const DeltaLlobregat2 = () => {
  const {lang} = useLanguage();
  const {titulo,descripcion,image} = lang === 'es' ? deltaLlobregat2ES : deltaLlobregat2CAT;
  return <Articulo image={image} title={titulo} description={descripcion} />
}
